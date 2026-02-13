'use client'

import { useEffect } from 'react'
import { onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals'

function sendToAnalytics(metric) {
  // Send to Google Analytics if gtag is available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    })
  }
}

export default function WebVitals() {
  useEffect(() => {
    onCLS(sendToAnalytics)
    onINP(sendToAnalytics)
    onLCP(sendToAnalytics)
    onFCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
  }, [])

  return null
}
