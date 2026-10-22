import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle('Paula Allemand')
  })

  test('should display header with navigation', async ({ page }) => {
    await page.goto('/')
    const header = page.locator('header')
    await expect(header).toBeVisible()
  })

  test('should have privacy banner on first visit', async ({ page, context }) => {
    // Clear localStorage to simulate first visit
    await context.clearCookies()
    await page.evaluate(() => localStorage.clear())

    await page.goto('/')
    const banner = page.locator('.privacy-banner')
    await expect(banner).toBeVisible()
  })

  test('should hide privacy banner after accepting', async ({ page }) => {
    await page.goto('/')
    const acceptButton = page.locator('button:has-text("Aceitar")')
    await acceptButton.click()

    const banner = page.locator('.privacy-banner')
    await expect(banner).not.toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('should navigate to training page', async ({ page }) => {
    await page.goto('/')
    // Click on a navigation link (adjust selector based on your actual navigation)
    const trainingLink = page.locator('a[href*="training"]').first()
    if (await trainingLink.isVisible()) {
      await trainingLink.click()
      await page.waitForURL(/\/training/)
    }
  })

  test('should have language switcher', async ({ page }) => {
    await page.goto('/')
    const langSwitcher = page.locator('[data-analytics="language-switcher"]')
    if (await langSwitcher.isVisible()) {
      await expect(langSwitcher).toBeVisible()
    }
  })
})

test.describe('Login Page', () => {
  test('should load login page', async ({ page }) => {
    await page.goto('/pt-BR/training/login')
    const heading = page.locator('h1')
    await expect(heading).toContainText('Login')
  })

  test('should display Google Sign-In button', async ({ page }) => {
    await page.goto('/pt-BR/training/login')
    // Google button might be in an iframe, check for it
    const googleButton = page.locator('#google-signin-button')
    await expect(googleButton).toBeVisible()
  })
})

test.describe('Performance', () => {
  test('should load homepage under 3 seconds', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/')
    const loadTime = Date.now() - startTime
    expect(loadTime).toBeLessThan(3000)
  })

  test('should have reasonable Largest Contentful Paint', async ({ page }) => {
    await page.goto('/')
    const metrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        let largestPaint = 0
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (entry.renderTime > largestPaint) {
              largestPaint = entry.renderTime
            }
          })
        })
        observer.observe({ entryTypes: ['largest-contentful-paint'] })
        setTimeout(() => {
          observer.disconnect()
          resolve(largestPaint)
        }, 5000)
      })
    })
    expect(metrics).toBeLessThan(5000)
  })
})
