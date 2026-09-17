export function trackEvent(name: string, parameters?: Record<string, string>) {
  const analyticsWindow = window as typeof window & {
    gtag?: (...args: unknown[]) => void
  }

  analyticsWindow.gtag?.('event', name, parameters)
}
