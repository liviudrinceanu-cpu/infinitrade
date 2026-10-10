'use client'

import dynamic from 'next/dynamic'

// Next 15: `ssr: false` e permis doar în Client Components.
const WebVitals = dynamic(() => import('@/components/WebVitals'), { ssr: false })

export default function WebVitalsLoader() {
  return <WebVitals />
}
