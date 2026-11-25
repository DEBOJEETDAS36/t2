'use client'
import type React from 'react'
import Link from 'next/link'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { useImages } from './ImagesProvider'

export default function GalleryContent() {
  useSiteEffects()
  const { listAll } = useImages()

  // Keep every existing gallery image, including the team sub-folder,
  // and prefer .jpeg when both .jpg and .jpeg versions exist.
  const photos = (() => {
    const stemMap = new Map<string, { src: string }>()
    for (const f of listAll('gallery')) {
      const stem = f.src.replace(/\.[^.]+$/, '')
      const existing = stemMap.get(stem)
      if (!existing || f.src.endsWith('.jpeg')) stemMap.set(stem, f)
    }
    return Array.from(stemMap.values())
  })()
  const d = (s: string) => ({ '--d': s }) as React.CSSProperties
  return (
    <div className="pg">
      <header className="ph">
        <div className="orb o1" /><div className="orb o2" />
        <div className="wrap">
          <span className="crumb glass reveal">Home <b>/</b> Gallery</span>
          <h1 className="reveal" style={d('.1s')}>Moments from the <em>road</em>.</h1>
          <p className="reveal" style={d('.2s')}>A look at the places, stays and people behind our journeys.</p>
        </div>
      </header>

      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="gal-events">
            {photos.map((f, i) => (
              <div key={f.src} className="gal-event reveal" style={d(`${(i % 4) * 0.08}s`)}>
                <img src={f.src} alt="" title="" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta glass reveal">
            <span className="eyebrow">Your turn</span>
            <h2>Create a few <em>moments</em> of your own</h2>
            <p className="sub">Tell us where you'd like to wake up next — we'll plan the rest.</p>
            <Link href="/leisure" className="btn pri">Browse tours →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
