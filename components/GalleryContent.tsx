'use client'
import type React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { GALLERY, type GalleryItem } from '@/data/gallery'
import { useImages } from './ImagesProvider'
import Lightbox from './Lightbox'

const PALETTE = [['#0e9196', '#064a52'], ['#d4a017', '#6a3a1a'], ['#4a7fb5', '#1a2a52'], ['#14a37f', '#0b3d56'], ['#b85a7a', '#2a2050'], ['#d8584a', '#2a3f5a']]

// Collage span pattern — cycles every 12 to keep the layout varied
const SPANS = [
  'tc-wide', 'tc-tall', 'tc-norm', 'tc-feat', 'tc-norm', 'tc-norm',
  'tc-norm', 'tc-wide', 'tc-tall', 'tc-norm', 'tc-norm', 'tc-feat',
]

export default function GalleryContent() {
  useSiteEffects()
  const { listAll } = useImages()
  const files = listAll('gallery')

  // Every image in public/images/gallery (excluding the team sub-folder) becomes a photo.
  // Its file name is the caption; an optional sub-folder becomes a filter category.
  const photos: GalleryItem[] = files.length
    ? files
        .filter(f => f.cat !== 'team')
        .map((f, i) => ({
          id: i + 1,
          title: f.name,
          cat: f.cat || '',
          place: '',
          h: 0,
          a: PALETTE[i % PALETTE.length][0],
          b: PALETTE[i % PALETTE.length][1],
          src: f.src,
        }))
    : GALLERY

  const cats: string[] = ['All', ...Array.from(new Set(photos.map(p => p.cat).filter((x): x is string => Boolean(x))))]
  const [c, setC] = useState('All')
  const active = cats.includes(c) ? c : 'All'
  const [lb, setLb] = useState<number | null>(null)
  const [tlb, setTlb] = useState<number | null>(null)
  const L = photos.filter(g => active === 'All' || g.cat === active)

  // Team / our-tours collage — deduplicate by stem (prefer .jpeg over .jpg)
  const teamRaw = files.filter(f => f.cat === 'team')
  const stemMap = new Map<string, typeof teamRaw[0]>()
  for (const f of teamRaw) {
    const stem = f.src.replace(/\.[^.]+$/, '')
    const existing = stemMap.get(stem)
    if (!existing || f.src.endsWith('.jpeg')) stemMap.set(stem, f)
  }
  const teamPhotos = Array.from(stemMap.values())

  return (
    <div className="pg">
      <header className="ph">
        <div className="orb o1" /><div className="orb o2" />
        <div className="wrap">
          <span className="crumb glass reveal">Home <b>/</b> Gallery</span>
          <h1 className="reveal" style={{ '--d': '.1s' } as React.CSSProperties}>Moments from the <em>road</em>.</h1>
          <p className="reveal" style={{ '--d': '.2s' } as React.CSSProperties}>A look at the places, stays and people behind our journeys. Tap any picture to view it full screen.</p>
        </div>
      </header>

      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          {cats.length > 1 && (
            <div className="chips reveal" style={{ marginTop: 10 }}>
              {cats.map(k => (
                <button key={k} className={k === active ? 'on' : ''} onClick={() => { setC(k); setLb(null) }}>{k}</button>
              ))}
            </div>
          )}
          <div className="cnt">Showing <b>{L.length}</b> of {photos.length} photos</div>
          <div className="gl">
            {L.map((g, i) => (
              <div
                key={g.id}
                className={'gi' + (g.src ? ' has-img' : '')}
                role="button" tabIndex={0} aria-label={g.title}
                style={{ '--a': g.a, '--b': g.b, ...(g.src ? {} : { '--h': g.h + 'px' }), animationDelay: `${i * 0.04}s` } as React.CSSProperties}
                onClick={() => setLb(i)}
                onKeyDown={e => e.key === 'Enter' && setLb(i)}
              >
                {g.src
                  ? <img className="gimg" src={g.src} alt={g.title} loading="lazy" decoding="async" />
                  : <div className="pimg" data-l="Photo · add image" />}
                <span className="cap">
                  {g.cat && <small>{g.cat}</small>}
                  <b>{g.title}</b>
                  {g.place && <span>{g.place}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {teamPhotos.length > 0 && (
        <section className="tc-section">
          <div className="wrap">
            <div className="head reveal">
              <div>
                <span className="eyebrow">Behind the journey</span>
                <h2>Our <em>tours</em></h2>
              </div>
              <p className="sub">Real moments from our trips — the people, the places and the memories we helped create.</p>
            </div>
            <div className="tc-grid">
              {teamPhotos.map((f, i) => (
                <div
                  key={f.src}
                  className={'tc-item ' + SPANS[i % SPANS.length]}
                  role="button" tabIndex={0} title=""
                  style={{ animationDelay: `${i * 0.03}s` } as React.CSSProperties}
                  onClick={() => setTlb(i)}
                  onKeyDown={e => e.key === 'Enter' && setTlb(i)}
                >
                  <img src={f.src} alt="" title="" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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

      <Lightbox
        items={L.map(g => ({ label: 'Photo · add image', title: g.title, sub: [g.cat, g.place].filter(Boolean).join(' · '), a: g.a, b: g.b, src: g.src }))}
        index={lb} onIndex={setLb} onClose={() => setLb(null)}
      />
      <Lightbox
        items={teamPhotos.map(f => ({ label: f.name, title: f.name, sub: 'Our Tours', a: '#0e9196', b: '#064a52', src: f.src }))}
        index={tlb} onIndex={setTlb} onClose={() => setTlb(null)}
      />
    </div>
  )
}
