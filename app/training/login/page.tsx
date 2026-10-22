'use client'

import { useEffect, useState } from 'react'
import { LoginButton } from '@/app/components/LoginButton'
import { readFileSync } from 'fs'
import { join } from 'path'

export default function LoginPage() {
  const [htmlContent, setHtmlContent] = useState<string>('')

  useEffect(() => {
    // Fetch the original HTML from public folder
    // In static export mode, this won't work server-side
    // So we'll use the LoginButton directly
  }, [])

  return (
    <div style={{ maxWidth: '600px', margin: '4rem auto', padding: '2rem' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>Login</h1>
      <p style={{ marginBottom: '2rem', color: '#565a5b' }}>
        Faça login com sua conta Google para acessar conteúdo exclusivo da plataforma de training.
      </p>

      <LoginButton />

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f7fbfd', borderRadius: '4px' }}>
        <p style={{ fontSize: '0.875rem', color: '#0c1618', margin: 0 }}>
          <strong>Desenvolvimento:</strong> Se receber erro de origin_mismatch ao testar local,{' '}
          <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer">
            registre localhost:3000
          </a>{' '}
          no OAuth consent screen do Google Cloud Console.
        </p>
      </div>
    </div>
  )
}
