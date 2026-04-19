import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useAnalytics() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', window.GA_MEASUREMENT_ID || '', {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])
}
