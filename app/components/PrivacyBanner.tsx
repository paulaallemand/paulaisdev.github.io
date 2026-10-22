'use client'

import { useEffect, useState } from 'react'
import { captureEvent } from '@/lib/analytics'

export function PrivacyBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if user already consented
    const hasConsented = localStorage.getItem('privacy_consent_accepted')
    if (!hasConsented) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('privacy_consent_accepted', 'true')
    localStorage.setItem('privacy_consent_date', new Date().toISOString())
    setShowBanner(false)
    
    // Capture consent event
    captureEvent('privacy_consent_accepted', {
      timestamp: new Date().toISOString(),
    })
  }

  const handleReject = () => {
    localStorage.setItem('privacy_consent_accepted', 'false')
    localStorage.setItem('privacy_consent_date', new Date().toISOString())
    setShowBanner(false)

    // Capture rejection event
    captureEvent('privacy_consent_rejected', {
      timestamp: new Date().toISOString(),
    })
  }

  if (!mounted || !showBanner) return null

  return (
    <div className="privacy-banner">
      <div className="privacy-banner__content">
        <div className="privacy-banner__text">
          <h3>Privacidade & Dados</h3>
          <p>
            Usamos analytics para entender como você usa o site. Nenhum dado pessoal é armazenado.{' '}
            <a href="/consultoria/privacidade" target="_blank" rel="noopener noreferrer">
              Saiba mais
            </a>
          </p>
        </div>
        <div className="privacy-banner__actions">
          <button
            className="privacy-banner__button privacy-banner__button--secondary"
            onClick={handleReject}
          >
            Rejeitar
          </button>
          <button
            className="privacy-banner__button privacy-banner__button--primary"
            onClick={handleAccept}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}
