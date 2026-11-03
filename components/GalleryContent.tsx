'use client'
import type React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { GALLERY, GCATS } from '@/data/gallery'
import Lightbox from './Lightbox'
export default function GalleryContent() {
  useSiteEffects()
  const [c, setC] = useState('All')
  const [lb, setLb] = useState<number | null>(null)
  const L = GALLERY.filter(g => c === 'All' || g.cat === c)
  return (
    <div className="pg">
      <header className="ph"><div className="orb o1" /><div className="orb o2" /><div className="wrap">
        <span className="crumb glass reveal">Home <b>/</b> Gallery</span>
        <h1 className="reveal" style={{ '--d': '.1s' } as React.CSSProperties}>Moments from the <em>road</em>.</h1>
        <p className="reveal" style={{ '--d': '.2s' } as React.CSSProperties}>A look at the places, stays and people behind our journeys. Tap any picture to view it full screen.</p>
      </div></header>
      <section style={{ paddingTop: 20 }}><div className="wrap">
        <div className="chips reveal" style={{ marginTop: 10 }}>{GCATS.map(k => <button key={k} className={k === c ? 'on' : ''} onClick={() => setC(k)}>{k}</button>)}</div>
        <div className="cnt">Showing <b>{L.length}</b> of {GALLERY.length} photos</div>
        <div className="gl">
          {L.map((g, i) => (
            <div key={g.id} className="gi" role="button" tabIndex={0} aria-label={g.title} style={{ '--a': g.a, '--b': g.b, '--h': g.h + 'px', animationDelay: `${i * 0.04}s` } as React.CSSProperties} onClick={() => setLb(i)} onKeyDown={e => e.key === 'Enter' && setLb(i)}>
              <div className="pimg" data-l="Photo · add image" />
              <span className="cap"><small>{g.cat}</small><b>{g.title}</b><span>{g.place}</span></span>
            </div>
          ))}
        </div>
        <div className="cta glass reveal" style={{ marginTop: 80 }}><span className="eyebrow">Your turn</span><h2>Create a few <em>moments</em> of your own</h2><p className="sub">Tell us where you’d like to wake up next — we’ll plan the rest.</p><Link href="/leisure" className="btn pri">Browse tours →</Link></div>
      </div></section>
      <Lightbox items={L.map(g => ({ label: 'Photo · add image', title: g.title, sub: `${g.cat} · ${g.place}`, a: g.a, b: g.b }))} index={lb} onIndex={setLb} onClose={() => setLb(null)} />
    </div>
  )
}
