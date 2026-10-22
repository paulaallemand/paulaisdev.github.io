import posthog from 'posthog-js'

const isServer = typeof window === 'undefined'

// Initialize PostHog only in browser
let analyticsInitialized = false

export function initializeAnalytics() {
  if (isServer || analyticsInitialized) return

  try {
    posthog.init('phc_knsPctRTrDzegXefcksP5bFttJDKL2t6eiwFgDMpetuy', {
      api_host: 'https://us.i.posthog.com',
      // Use localStorage to avoid cookies
      persistence: 'localStorage',
      // Basic autocapture
      autocapture: true,
      // Only capture in production
      opt_out_capturing_by_default: process.env.NODE_ENV !== 'production',
    } as any)

    analyticsInitialized = true
  } catch (error) {
    console.error('Failed to initialize PostHog:', error)
  }
}

export function captureEvent(eventName: string, properties?: Record<string, any>) {
  if (isServer || !analyticsInitialized) return

  try {
    posthog.capture(eventName, properties)
  } catch (error) {
    console.error('Failed to capture event:', error)
  }
}

export function setUserProperties(properties: Record<string, any>) {
  if (isServer || !analyticsInitialized) return

  try {
    posthog.people.set(properties)
  } catch (error) {
    console.error('Failed to set user properties:', error)
  }
}

export function resetUser() {
  if (isServer || !analyticsInitialized) return

  try {
    posthog.reset()
  } catch (error) {
    console.error('Failed to reset user:', error)
  }
}
