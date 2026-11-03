'use client'
import type React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useImages } from './ImagesProvider'
const FALLBACK = [{ name: 'Bali', a: '#0e9196', b: '#064a52' }, { name: 'Dubai', a: '#e0a800', b: '#0e6a73' }, { name: 'Japan', a: '#d8584a', b: '#2a3f5a' }, { name: 'Kerala', a: '#14a37f', b: '#0b3d56' }, { name: 'Switzerland', a: '#4a7fb5', b: '#1a2a52' }]
const MS = 6500
const cap = (n: string) => n.replace(/^banner\s*\d*\s*/i, '').replace(/^\d+\s*/, '').trim()
// Full-bleed sliding banner behind the hero text. Uses every image in public/images/banner/ (sorted by name); gradient slides if none.
export default function HeroSlider() {
  const { list } = useImages()
  const imgs = list('banner')
  const slides: { name: string; src?: string; a?: string; b?: string }[] = imgs.length ? imgs.map(x => ({ name: cap(x.name), src: x.src })) : FALLBACK
  const n = slides.length
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const x0 = useRef<number | null>(null)
  const go = useCallback((k: number) => setI(((k % n) + n) % n), [n])
  useEffect(() => { if (paused || n < 2) return; const t = setTimeout(() => go(i + 1), MS); return () => clearTimeout(t) }, [i, paused, n, go])
  return (
    <div className={'bn' + (paused ? ' paused' : '')} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onTouchStart={e => { x0.current = e.touches[0].clientX }} onTouchEnd={e => { if (x0.current === null) return; const dx = e.changedTouches[0].clientX - x0.current; if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1)); x0.current = null }}>
      <div className="bn-t" style={{ '--i': i } as React.CSSProperties}>
        {slides.map((s, k) => (
          <div key={k} className={'bn-i' + (k === i ? ' on' : '') + (s.src ? ' im' : '')} data-n={s.name} style={{ '--a': s.a, '--b': s.b } as React.CSSProperties}>
            {s.src && <img src={s.src} alt={s.name} loading="eager" decoding="async" fetchPriority={k === 0 ? 'high' : 'low'} />}
          </div>
        ))}
      </div>
      <div className="bn-shade" />
      {n > 1 && (
        <div className="bn-ui"><div className="wrap bn-row">
          <div className="bn-dots">{slides.map((s, k) => <button key={k} aria-label={`Go to slide ${k + 1}: ${s.name}`} className={'bn-d' + (k === i ? ' on' : k < i ? ' done' : '')} onClick={() => go(k)}><span /></button>)}</div>
          <div className="bn-cap"><b>{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</b>{slides[i].name}</div>
          <div className="bn-ar"><button className="bn-a" aria-label="Previous slide" onClick={() => go(i - 1)}>←</button><button className="bn-a" aria-label="Next slide" onClick={() => go(i + 1)}>→</button></div>
        </div></div>
      )}
    </div>
  )
}
