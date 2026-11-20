'use client'
import type React from 'react'
import Link from 'next/link'
import { useSiteEffects } from '@/lib/useSiteEffects'

export default function CruiseContent() {
  useSiteEffects()
  const d = (s: string) => ({ '--d': s }) as React.CSSProperties
  return (
    <div className="pg">
      <header className="ph">
        <div className="orb o1" /><div className="orb o2" />
        <div className="wrap">
          <span className="crumb glass reveal">Home <b>/</b> Cruise</span>
          <h1 className="reveal" style={d('.1s')}>Cruise <em>journeys</em></h1>
          <p className="reveal" style={d('.2s')}>Sailing soon — a hand-picked collection of ocean and river cruises is on its way.</p>
        </div>
      </header>

      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="glass reveal" style={{ padding: '64px 32px', textAlign: 'center' }}>
            <span className="eyebrow">Coming soon</span>
            <h2>Our cruise collection is being <em>charted</em></h2>
            <p className="sub" style={{ margin: '14px auto 0' }}>We’re putting the final touches to our cruise itineraries. In the meantime, our travel designers can plan a sailing around you.</p>
            <Link href="/contact" className="btn pri" style={{ marginTop: 28 }}>Plan my cruise →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
