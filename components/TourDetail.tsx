'use client'
import type React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { useEnquiry } from '@/lib/useEnquiry'
import { type TourData } from '@/data/tours'
import { useImages } from './ImagesProvider'
import Lightbox from './Lightbox'
export default function TourDetail({ tour: t }: { tour: TourData }) {
  useSiteEffects()
  const { findAny } = useImages()
  const heroPic = findAny(t.place, ...(t.img || []))
  const heroImages = (t.heroImages || []).map(name => (name ? findAny(name) : null))
  const enq = useEnquiry('tour',{ extra: { tour: t.name } })
  const sent = enq.sent
  const [pol, setPol] = useState<Set<number>>(new Set())
  const [lb, setLb] = useState<number | null>(null)
  const flip = (s: Set<number>, k: number) => { const x = new Set(s); x.has(k) ? x.delete(k) : x.add(k); return x }
  useEffect(() => {
    document.body.dataset.cl = 'View'
    return () => { delete document.body.dataset.cl }
  }, [])
  const d = (s: string) => ({ '--d': s }) as React.CSSProperties
  return (
    <div className="pg tourpg">
      <header className="ph"><div className="orb o1" /><div className="orb o2" /><div className="wrap">
        <span className="crumb glass reveal"><Link href="/">Home</Link> <b>/</b> <Link href="/leisure">Leisure</Link> <b>/</b> {t.name}</span>
        <div className="tags reveal">{t.tags.map(([l, c]) => <span key={l} className={'lbl ' + c}>{l}</span>)}</div>
        <h1 className="reveal" style={d('.1s')}>{t.first} <em>{t.accent}</em></h1>
        <p className="reveal" style={d('.2s')}>{t.subtitle}</p>
        <div className="rp reveal" style={d('.3s')}>{t.route.map((r, i) => <span key={r + i} style={{ display: 'contents' }}>{i > 0 && <b>→</b>}<span>{r}</span></span>)}</div>
        <div className="hg reveal" style={d('.3s')}>{t.heroLabels.map((l, i) => {
          const src = heroImages[i] ?? (i === 0 ? heroPic : null)
          return (
            <div key={l + i} className="pimg" data-l={l} role="button" tabIndex={0} onClick={() => setLb(i)} onKeyDown={e => e.key === 'Enter' && setLb(i)}>{src && <img className="pic" src={src} alt={i === 0 ? t.place : ''} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />}</div>
          )
        })}</div>
        <div className="facts glass reveal">{t.facts.map(([l, v]) => <div key={l}><small>{l}</small><b>{v}</b></div>)}</div>
      </div></header>
      <div className="wrap lay"><div>
        <div className="blk" id="overview" style={{ paddingTop: 44 }}><span className="eyebrow">Overview</span><h2>The road to the <em>roof</em> of the east</h2>
          <p className="lead">{t.overview}</p>
          <div className="places"><span className="eyebrow">Places to cover</span><div className="hl">{t.highlights.map(h => <span key={h}>{h}</span>)}</div></div></div>
        <div className="blk" id="policy"><span className="eyebrow">Good to know</span><h2>Before you <em>travel</em></h2>
          <div className="faq" style={{ maxWidth: 'none' }}>{t.policies.map((f, i) => (
            <div key={f[0]} className={'q glass reveal' + (pol.has(i) ? ' open' : '')} style={d(`${i * 0.06}s`)}><button onClick={() => setPol(flip(pol, i))}>{f[0]}<span>+</span></button><div className="qa"><div><p>{f[1]}</p></div></div></div>))}</div></div>
      </div>
      <aside className="bk glass reveal"><div><small>{t.fixed ? `Fixed departure · ${t.departure}` : t.departure}</small></div>
        <ul>{t.perks.map(p => <li key={p}>{p}</li>)}</ul>
        <a href="#enquire" className="btn pri">Enquire about this tour →</a></aside></div>
      <section id="enquire" style={{ scrollMarginTop: 70 }}><div className="wrap"><form className="cf glass reveal" onSubmit={enq.onSubmit}>
        <div className="full"><span className="eyebrow">Reserve your seat</span><h2>Enquire about <em>{t.name}</em></h2></div>
        <input name="name" className="in" placeholder="Full name" required /><input name="email" className="in" type="email" placeholder="Email address" required />
        <input name="phone" className="in" placeholder="Phone number" /><input name="travellers" className="in" placeholder="Number of travellers" />
        <textarea name="message" className="in full" placeholder="Anything we should know — dates, room preferences, special requests" maxLength={1000} />
        <button className="btn pri full" style={{ justifySelf: 'start' }}>{sent ? 'Thank you — we’ll be in touch ✓' : 'Send enquiry'}</button>{enq.err && <p className="ferr full">{enq.err}</p>}</form></div></section>
      <Lightbox items={t.heroLabels.map((l, i) => ({ label: l, title: t.name, sub: `Photo ${i + 1} of ${t.heroLabels.length}`, a: t.a, b: t.b, src: (heroImages[i] ?? (i === 0 ? heroPic : null)) ?? undefined }))} index={lb} onIndex={setLb} onClose={() => setLb(null)} />
      <div className="mb"><a href="#enquire" className="btn pri" style={{ padding: '12px 22px', flex: 1, justifyContent: 'center' }}>Enquire</a></div>
    </div>
  )
}
