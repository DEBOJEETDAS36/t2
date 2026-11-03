'use client'
import type React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { useEnquiry } from '@/lib/useEnquiry'
import { TOURS, type TourData } from '@/data/tours'
import Lightbox from './Lightbox'
const LC: Record<string, string> = { Bestseller: '', New: 'teal', 'Few seats left': 'red', 'Honeymoon pick': 'pink', 'Group departure': 'blue', 'Family favourite': 'green' }
const ML: Record<string, string> = { B: 'Breakfast', L: 'Lunch', D: 'Dinner' }
const IDS = ['overview', 'plan', 'stay', 'inc', 'policy', 'enquire']
const TABS = ['Overview', 'Itinerary', 'Stay', 'Inclusions', 'Good to know', 'Enquire']
const Y = [90, 70, 70, 60, 80, 72, 66, 84]
const inr = (v: number) => '₹' + Math.round(v).toLocaleString('en-IN')
function Route({ nodes }: { nodes: string[][] }) {
  const n = nodes.length, xs = nodes.map((_, i) => 70 + i * (740 / Math.max(n - 1, 1))), ys = nodes.map((_, i) => Y[i % Y.length])
  let d = `M${xs[0]} ${ys[0]}`
  for (let i = 1; i < n; i++) { const m = (xs[i - 1] + xs[i]) / 2; d += ` C${m} ${ys[i - 1]} ${m} ${ys[i]} ${xs[i]} ${ys[i]}` }
  return (
    <svg viewBox="0 0 880 150"><path className="rpath" pathLength={1} d={d} />
      {nodes.map(([p, nt], i) => (
        <g className="rn" key={i}><circle cx={xs[i]} cy={ys[i]} r="7" style={{ transitionDelay: `${0.2 + i * 0.65}s` }} /><text x={xs[i]} y={ys[i] + 32}>{p}</text><text className="n" x={xs[i]} y={ys[i] + 48}>{nt}</text></g>
      ))}
    </svg>
  )
}
export default function TourDetail({ tour: t }: { tour: TourData }) {
  useSiteEffects()
  const enq = useEnquiry('tour',{ extra: { tour: t.name } })
  const sent = enq.sent
  const [open, setOpen] = useState<Set<number>>(new Set([1]))
  const [pol, setPol] = useState<Set<number>>(new Set())
  const [n, setN] = useState(2)
  const [tab, setTab] = useState(0)
  const [lb, setLb] = useState<number | null>(null)
  const flip = (s: Set<number>, k: number) => { const x = new Set(s); x.has(k) ? x.delete(k) : x.add(k); return x }
  const allOpen = open.size === t.days.length
  useEffect(() => {
    document.body.dataset.cl = 'View'
    const f = () => { let k = 0; IDS.forEach((id, i) => { const e = document.getElementById(id); if (e && e.getBoundingClientRect().top < 180) k = i }); setTab(k) }
    f(); addEventListener('scroll', f, { passive: true })
    return () => { delete document.body.dataset.cl; removeEventListener('scroll', f) }
  }, [])
  const d = (s: string) => ({ '--d': s }) as React.CSSProperties
  const total = t.price * n * (1 + t.gst / 100)
  return (
    <div className="pg tourpg">
      <header className="ph"><div className="orb o1" /><div className="orb o2" /><div className="wrap">
        <span className="crumb glass reveal"><Link href="/">Home</Link> <b>/</b> <Link href="/leisure">Leisure</Link> <b>/</b> {t.name}</span>
        <div className="tags reveal">{t.tags.map(([l, c]) => <span key={l} className={'lbl ' + c}>{l}</span>)}</div>
        <h1 className="reveal" style={d('.1s')}>{t.first} <em>{t.accent}</em></h1>
        <p className="reveal" style={d('.2s')}>{t.subtitle}</p>
        <div className="rp reveal" style={d('.3s')}>{t.route.map((r, i) => <span key={r + i} style={{ display: 'contents' }}>{i > 0 && <b>→</b>}<span>{r}</span></span>)}</div>
        <div className="hg reveal" style={d('.3s')}>{t.heroLabels.map((l, i) => <div key={l + i} className="pimg" data-l={l} role="button" tabIndex={0} onClick={() => setLb(i)} onKeyDown={e => e.key === 'Enter' && setLb(i)} />)}</div>
        <div className="facts glass reveal">{t.facts.map(([l, v]) => <div key={l}><small>{l}</small><b>{v}</b></div>)}</div>
      </div></header>
      <nav className="tn"><div className="wrap">{IDS.map((id, i) => <a key={id} href={'#' + id} className={tab === i ? 'on' : ''}>{TABS[i]}</a>)}</div></nav>
      <div className="wrap lay"><div>
        <div className="blk" id="overview" style={{ paddingTop: 44 }}><span className="eyebrow">Overview</span><h2>The road to the <em>roof</em> of the east</h2>
          <p className="lead">{t.overview}</p>
          <div className="hl">{t.highlights.map(h => <span key={h}>{h}</span>)}</div>
          <div className="rt2 glass reveal"><Route nodes={t.nodes} /></div></div>
        <div className="blk" id="plan"><span className="eyebrow">Day by day</span><h2>Your <em>itinerary</em></h2>
          <button className="xa" onClick={() => setOpen(allOpen ? new Set() : new Set(t.days.map(x => x[0])))}>{allOpen ? 'Collapse all days －' : 'Expand all days ＋'}</button>
          {t.days.map((x, i) => (
            <div key={x[0]} className={'dy glass reveal' + (open.has(x[0]) ? ' open' : '')} style={d(`${i * 0.04}s`)}>
              <button className="dh" onClick={() => setOpen(flip(open, x[0]))}><b>{String(x[0]).padStart(2, '0')}</b><div><small>Day {x[0]}</small><h3>{x[1]}</h3></div>
                <div className="ml">{['B', 'L', 'D'].map(m => <span key={m} title={ML[m]} className={x[2].includes(m) ? 'on' : ''}>{m}</span>)}</div><i>+</i></button>
              <div className="db"><div><div className="dc"><div className="pimg" data-l={`Day ${x[0]} image · 900×600`} /><div><p>{x[3]}</p><ul>{x[4].map(b => <li key={b}>{b}</li>)}</ul></div></div></div></div>
            </div>
          ))}</div>
        <div className="blk" id="stay"><span className="eyebrow">Where you’ll stay</span><h2>Handpicked <em>stays</em></h2><p className="lead" style={{ marginBottom: 28 }}>Comfortable cottages, hotels and local homestays — or similar standard.</p>
          <div className="g3" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>{t.stays.map((s, i) => (
            <div key={i} className="post glass reveal" style={d(`${i * 0.06}s`)}><div className="img" style={{ '--a': s[3], '--b': s[4] } as React.CSSProperties}><div className="pimg" data-l="Property image · 800×500" /><span className="rg">{s[2]}</span></div>
              <div className="pt"><div className="mt"><b>{s[1]}</b></div><h3>{s[0]}</h3><p>Or similar standard · twin sharing</p></div></div>))}</div></div>
        <div className="blk" id="inc"><span className="eyebrow">What’s covered</span><h2>Inclusions &amp; <em>exclusions</em></h2><div className="ie">
          <div className="glass reveal"><h3>Included</h3><ul>{t.included.map(x => <li key={x}>{x}</li>)}</ul></div>
          <div className="glass x reveal" style={d('.1s')}><h3>Not included</h3><ul>{t.excluded.map(x => <li key={x}>{x}</li>)}</ul></div></div></div>
        <div className="blk" id="policy"><span className="eyebrow">Good to know</span><h2>Before you <em>travel</em></h2>
          <div className="faq" style={{ maxWidth: 'none' }}>{t.policies.map((f, i) => (
            <div key={f[0]} className={'q glass reveal' + (pol.has(i) ? ' open' : '')} style={d(`${i * 0.06}s`)}><button onClick={() => setPol(flip(pol, i))}>{f[0]}<span>+</span></button><div className="qa"><div><p>{f[1]}</p></div></div></div>))}</div></div>
      </div>
      <aside className="bk glass reveal"><div><small>{t.fixed ? `Fixed departure · ${t.departure}` : t.departure}</small><div className="pr">{inr(t.price)} <span>per person</span></div><small style={{ textTransform: 'none', letterSpacing: 0, fontSize: '.8rem' }}>+ {t.gst}% GST · {t.priceNote}</small></div>
        <div className="stp"><span>Travellers</span><div style={{ display: 'flex', gap: 14, alignItems: 'center' }}><button aria-label="Fewer" onClick={() => setN(Math.max(1, n - 1))}>−</button><b>{n}</b><button aria-label="More" onClick={() => setN(Math.min(12, n + 1))}>+</button></div></div>
        <div className="tot"><div><small>Estimated total</small></div><b>{inr(total)}</b></div>
        <ul>{t.perks.map(p => <li key={p}>{p}</li>)}</ul>
        <a href="#enquire" className="btn pri">Enquire about this tour →</a></aside></div>
      <section className="alt"><div className="wrap"><div className="head reveal"><div><span className="eyebrow">You may also like</span><h2>More <em>journeys</em></h2></div><Link href="/leisure" className="btn gh">All tours</Link></div>
        <div className="g3">{Object.values(TOURS).filter(x => x.slug !== t.slug && x.region === t.region).slice(0, 3).map((x, i) => (
          <Link key={x.slug} href={`/leisure/${x.slug}`} className="post glass reveal" style={d(`${i * 0.08}s`)}><div className="img" style={{ '--a': x.a, '--b': x.b } as React.CSSProperties}><div className="pimg" data-l="Tour image · 800×500" />{x.label && <span className={'lbl ' + LC[x.label]}>{x.label}</span>}<span className="rg">{x.region === 'dom' ? 'Domestic' : 'International'}</span></div>
            <div className="pt"><div className="mt"><b>{x.place}</b><span>{x.days.length} days / {x.days.length - 1} nights</span></div><h3>{x.name}</h3><div className="tf"><div><small>From, per person</small><strong>{inr(x.price)}</strong></div><span className="rt">★ {x.rating}</span></div><span className="rd">View itinerary →</span></div></Link>))}</div></div></section>
      <section id="enquire" style={{ scrollMarginTop: 70 }}><div className="wrap"><form className="cf glass reveal" onSubmit={enq.onSubmit}>
        <div className="full"><span className="eyebrow">Reserve your seat</span><h2>Enquire about <em>{t.name}</em></h2></div>
        <input name="name" className="in" placeholder="Full name" required /><input name="email" className="in" type="email" placeholder="Email address" required />
        <input name="phone" className="in" placeholder="Phone number" /><input name="travellers" className="in" placeholder="Number of travellers" />
        <textarea name="message" className="in full" placeholder="Anything we should know — dates, room preferences, special requests" maxLength={1000} />
        <button className="btn pri full" style={{ justifySelf: 'start' }}>{sent ? 'Thank you — we’ll be in touch ✓' : 'Send enquiry'}</button>{enq.err && <p className="ferr full">{enq.err}</p>}</form></div></section>
      <Lightbox items={t.heroLabels.map((l, i) => ({ label: l, title: t.name, sub: `Photo ${i + 1} of ${t.heroLabels.length}`, a: t.a, b: t.b }))} index={lb} onIndex={setLb} onClose={() => setLb(null)} />
      <div className="mb"><div><small>From, per person</small><b>{inr(t.price)}</b></div><a href="#enquire" className="btn pri" style={{ padding: '12px 22px' }}>Enquire</a></div>
    </div>
  )
}
