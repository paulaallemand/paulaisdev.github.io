'use client'

import { useEffect, useRef, useState } from 'react'
import { captureEvent } from '@/lib/analytics'

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: any) => void
          renderButton: (element: HTMLElement, options: any) => void
          prompt: (callback?: (notification: any) => void) => void
        }
      }
    }
  }
}

export function LoginButton() {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    // Load Google Identity Services script
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    script.onload = () => {
      if (!window.google) {
        setError('Não foi possível carregar Google Identity Services')
        return
      }

      try {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
          auto_select: false,
          itp_support: true,
        })

        if (buttonRef.current) {
          window.google.accounts.id.renderButton(buttonRef.current, {
            theme: 'outline',
            size: 'large',
            text: 'signin_with',
            width: '100%',
          })
          setScriptLoaded(true)
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Erro ao inicializar Google Sign-In'
        setError(message)
        captureEvent('google_signin_init_error', { error: message })
      }
    }

    script.onerror = () => {
      const message = 'Erro ao carregar Google Identity Services'
      setError(message)
      captureEvent('google_script_load_error', { error: message })
    }

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const handleCredentialResponse = (response: any) => {
    setLoading(true)
    setError(null)

    try {
      // The response contains a JWT token in response.credential
      const token = response.credential

      if (!token) {
        throw new Error('Token não recebido')
      }

      // Decode JWT to get user info
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
      const userData = JSON.parse(jsonPayload)

      // Validate user data
      if (!userData.email) {
        throw new Error('Email não encontrado no token')
      }

      // Capture login event
      captureEvent('google_login_success', {
        email: userData.email,
        name: userData.name || 'unknown',
        picture: userData.picture ? 'yes' : 'no',
      })

      // Store token and user info in localStorage
      localStorage.setItem('google_auth_token', token)
      localStorage.setItem('google_user_email', userData.email)
      localStorage.setItem('google_user_name', userData.name || '')
      localStorage.setItem('google_login_timestamp', new Date().toISOString())

      console.log('✅ Login bem-sucedido:', userData.email)

      // Small delay for UX feedback
      setTimeout(() => {
        window.location.href = '/pt-BR/training'
      }, 500)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Erro desconhecido ao processar login'
      setError(message)
      setLoading(false)

      console.error('❌ Erro ao processar login:', error)
      captureEvent('google_login_error', {
        error: message,
        timestamp: new Date().toISOString(),
      })
    }
  }

  return (
    <div className="login-button-wrapper">
      {error && (
        <div className="login-error-message">
          <span className="login-error-icon">⚠️</span>
          <div>
            <strong>Erro ao fazer login:</strong>
            <p>{error}</p>
            {error.includes('origin_mismatch') && (
              <p>
                <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer">
                  Configure localhost:3000 no Google Cloud Console
                </a>
              </p>
            )}
          </div>
        </div>
      )}

      {!scriptLoaded && !error && <div className="login-loading">Carregando...</div>}

      <div
        ref={buttonRef}
        id="google-signin-button"
        className={loading ? 'login-button-loading' : ''}
      ></div>

      {loading && (
        <div className="login-spinner">
          <div className="login-spinner-inner"></div>
          <p>Autenticando...</p>
        </div>
      )}
    </div>
  )
}
