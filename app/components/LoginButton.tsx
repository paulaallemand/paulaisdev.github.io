'use client'

import { useEffect, useRef } from 'react'
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

  useEffect(() => {
    // Load Google Identity Services script
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    script.onload = () => {
      if (!window.google) return

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
        })
      }
    }

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const handleCredentialResponse = (response: any) => {
    try {
      // The response contains a JWT token in response.credential
      const token = response.credential

      // You can decode this JWT to get user info
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
      const userData = JSON.parse(jsonPayload)

      // Capture login event
      captureEvent('google_login_success', {
        email: userData.email,
        name: userData.name,
      })

      // Store token in localStorage
      localStorage.setItem('google_auth_token', token)
      localStorage.setItem('google_user_email', userData.email)

      console.log('Login bem-sucedido:', userData)

      // Redirect or show success
      window.location.href = '/training'
    } catch (error) {
      console.error('Erro ao processar login:', error)
      captureEvent('google_login_error', {
        error: error instanceof Error ? error.message : 'unknown',
      })
    }
  }

  return (
    <div className="login-button-container">
      <div ref={buttonRef} id="google-signin-button"></div>
    </div>
  )
}
