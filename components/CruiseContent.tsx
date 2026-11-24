'use client'
import type React from 'react'
import { useState } from 'react'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { useEnquiry } from '@/lib/useEnquiry'
import { useImages } from './ImagesProvider'
import Pic from './Pic'
import { CRUISE as C, slug } from '../data/cruises'
import { ABOUT } from '@/data/about'

// A picture slot: shows public/images/<name>.<ext> if it exists, otherwise a dashed placeholder with the size to use.
function Slot({ name, label, alt = '', sizes, priority }: { name: string; label: string; alt?: string; sizes?: string; priority?: boolean }) {
  const { find } = useImages()
  return find(name) ? <Pic name={name} alt={alt} sizes={sizes} priority={priority} /> : <div className="pimg" data-l={label} />
}

const ICONS = [
  <svg key="g" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></svg>,
  <svg key="w" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9c3-3 6 3 9 0s6 3 9 0M3 15c3-3 6 3 9 0s6 3 9 0" /></svg>,
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z" /><path d="M3 8v8l9 5 9-5V8M12 13v8" /></svg>,
  <svg key="p" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-8-8 18-2-8-8-2z" /></svg>,
]
const WAVE = 'M0 45q90 -35 180 0t180 0t180 0t180 0t180 0t180 0t180 0t180 0V90H0Z'

export default function CruiseContent() {
  useSiteEffects()
  const enq = useEnquiry('cruise')
  const { find } = useImages()
  const [open, setOpen] = useState<number | null>(0)
  const [line, setLine] = useState('')
  const [dest, setDest] = useState('')
  const contact = ABOUT.contacts[0] ?? ['', '']
  const d = (s: string) => ({ '--d': s }) as React.CSSProperties
  const toForm = () => document.getElementById('plan')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const pickLine = (n: string) => { setLine(n); toForm() }
  const pickDest = (n: string) => { setDest(n); toForm() }
  return (
    <div className="pg">
      {/* HERO */}
      <header className="cr-hero"><div className="cr-card">
        <Slot name="cruise/hero" label="Cruise hero · 2400×1000" alt="Cruise ship at sea" sizes="(max-width: 1304px) 100vw, 1200px" priority />
        <div className="cr-shade" />
        <div className="cr-waves" aria-hidden><svg viewBox="0 0 1440 90" preserveAspectRatio="none"><path d={WAVE} fill="var(--bg)" /></svg><svg viewBox="0 0 1440 90" preserveAspectRatio="none"><path d={WAVE} fill="var(--bg)" /></svg></div>
        <div className="cr-in">
          <span className="eyebrow reveal">Cruise holidays</span>
          <h1 className="reveal" style={d('.1s')}>Set sail on your <em>next</em> holiday</h1>
          <p className="reveal" style={d('.2s')}>{C.heroSub}</p>
          <div className="cr-cta reveal" style={d('.3s')}><a href="#plan" className="btn pri">Plan my cruise →</a><a href="#lines" className="btn gh cr-gh">Explore cruise lines</a></div>
        </div>
      </div></header>

      {/* INTRO */}
      <section className="cr-sec"><div className="wrap sp">
        <div className="reveal"><span className="eyebrow">Cruise holidays</span><h2>Explore beautiful destinations, in <em>comfort</em></h2>
          <p style={{ marginTop: 22 }}>{C.intro}</p>
          <a href="#plan" className="btn pri" style={{ marginTop: 26 }}>Speak to a cruise specialist →</a></div>
        <div className="cr-hl reveal" style={d('.15s')}>{C.highlights.map((h, i) => <div key={h[0]} className="glass"><i>{['⚓', '✦', '◈'][i]}</i><div><h3>{h[0]}</h3><p>{h[1]}</p></div></div>)}</div>
      </div></section>

      {/* SERVICES */}
      <section className="cr-sec alt"><div className="wrap">
        <div className="head reveal"><div><span className="eyebrow">Our services include</span><h2>Everything for a <em>smooth</em> voyage</h2></div></div>
        <div className="cr-sv">{C.services.map((s, i) => (
          <div key={s[0]} className="cr-sc glass reveal" style={d(`${(i % 2) * 0.1}s`)}><span className="n">{i + 1}</span><div className="cr-ic">{ICONS[i]}</div><h3>{s[0]}</h3><p>{s[1]}</p><div className="cr-tg">{s[2].map(t => <span key={t}>{t}</span>)}</div></div>))}</div>
      </div></section>

      {/* CRUISE LINES */}
      <section className="cr-sec" id="lines"><div className="wrap">
        <div className="head reveal"><div><span className="eyebrow">Cruise lines</span><h2>Sail with the <em>best</em></h2></div><p className="sub">Tell us the line you have in mind, or let us recommend one for you.</p></div>
        <div className="g3">{C.lines.map((l, i) => {
          const logo = find(`cruise/logo-${slug(l[0])}`)
          return (
            <div key={l[0]} className="post glass reveal" style={d(`${(i % 3) * 0.08}s`)}>
              <div className="img" style={{ '--a': l[2], '--b': l[3] } as React.CSSProperties}>
                <Slot name={`cruise/${slug(l[0])}`} label="Cruise photo · 800×500" alt={l[0]} />
                <span className="rg">{l[1]}</span>
                {logo && <span className="cr-lg"><img src={logo} alt={`${l[0]} logo`} loading="lazy" /></span>}
              </div>
              <div className="pt"><h3>{l[0]}</h3><button type="button" className="rd cr-rd" onClick={() => pickLine(l[0])}>Enquire about this cruise →</button></div>
            </div>
          )
        })}</div>
      </div></section>

      {/* DESTINATIONS */}
      <section className="cr-sec alt"><div className="wrap">
        <div className="head reveal"><div><span className="eyebrow">Popular destinations</span><h2>Where will the <em>sea</em> take you?</h2></div><p className="sub">International voyages and cruise experiences within India.</p></div>
        <div className="cr-dg">{C.destinations.map((x, i) => (
          <button key={x[0]} type="button" className="cr-dt reveal" style={{ '--a': x[2], '--b': x[3], '--d': `${(i % 4) * 0.07}s` } as React.CSSProperties} onClick={() => pickDest(x[0] === 'River cruises' ? 'River cruise – India' : x[0] === 'Coastal cruises' ? 'Coastal cruise – India' : x[0])}>
            <Slot name={`cruise/dest-${slug(x[0])}`} label="Photo · 800×600" alt={x[0]} /><span className="cr-dl"><small>{x[1]}</small><b>{x[0]}</b></span></button>))}</div>
      </div></section>

      {/* HOW IT WORKS */}
      <section className="cr-sec"><div className="wrap">
        <div className="head reveal" style={{ justifyContent: 'center', textAlign: 'center' }}><div><span className="eyebrow">How it works</span><h2>From idea to <em>embarkation</em></h2></div></div>
        <div className="cr-stp">{C.steps.map((s, i) => <div key={s[0]} className="reveal" style={d(`${i * 0.1}s`)}><i>{String(i + 1).padStart(2, '0')}</i><h3>{s[0]}</h3><p>{s[1]}</p></div>)}</div>
      </div></section>

      {/* ENQUIRY */}
      <section className="cr-sec alt" id="plan"><div className="wrap cg">
        <form className="cf glass reveal" onSubmit={enq.onSubmit}>
          <div className="full"><span className="eyebrow">Plan your cruise</span><h2>Tell us about your <em>voyage</em></h2></div>
          <input className="in" name="name" placeholder="Full name" required /><input className="in" name="email" type="email" placeholder="Email address" required />
          <input className="in" name="phone" placeholder="Phone number" /><input className="in" name="travellers" placeholder="Number of travellers" />
          <select className="in" name="Cruise type"><option>Cruise type</option><option>International cruise</option><option>River cruise (India)</option><option>Coastal cruise (India)</option><option>Not sure yet</option></select>
          <select className="in" name="Cruise line" value={line} onChange={e => setLine(e.target.value)}><option value="">Preferred cruise line (optional)</option>{C.lines.map(l => <option key={l[0]}>{l[0]}</option>)}</select>
          <select className="in" name="destination" value={dest} onChange={e => setDest(e.target.value)}><option value="">Destination (optional)</option>{['Singapore', 'Dubai', 'Mediterranean', 'Europe', 'Alaska', 'Caribbean', 'River cruise – India', 'Coastal cruise – India', 'Other'].map(x => <option key={x}>{x}</option>)}</select>
          <select className="in" name="Pre & post cruise help"><option>Pre &amp; post cruise help (optional)</option><option>Flights</option><option>Hotel stay</option><option>Transfers</option><option>Sightseeing</option><option>All of these</option></select>
          <input className="in full" name="dates" placeholder="Preferred travel dates" />
          <textarea className="in full" name="message" placeholder="Tell us your preferences, budget and anything else we should know" maxLength={1000} />
          <button className="btn pri full" style={{ justifySelf: 'start' }} disabled={enq.busy}>{enq.sent ? 'Thank you — we’ll be in touch ✓' : enq.busy ? 'Sending…' : 'Send cruise enquiry'}</button>
          {enq.err && <p className="ferr full">{enq.err}</p>}
        </form>
        <div className="ci reveal" style={d('.15s')}>
          <div className="c glass"><i>✆</i><div><small>Call us</small><b><a href={`tel:${contact[1].replace(/\s/g, '')}`}>{contact[1]}</a></b></div></div>
          <div className="c glass"><i>✉</i><div><small>Email</small><b><a href={`mailto:${contact[0]}`}>{contact[0]}</a></b></div></div>
          <div className="cr-note glass"><h3>Not sure where to start?</h3><p>Share your preferences, budget and travel requirements — we’ll help you choose the cruise experience that fits.</p></div>
        </div>
      </div></section>

      {/* FAQ */}
      <section className="cr-sec"><div className="wrap">
        <div className="head reveal" style={{ justifyContent: 'center', textAlign: 'center' }}><div><span className="eyebrow">FAQ</span><h2>Cruise <em>questions</em></h2></div></div>
        <div className="faq">{C.faq.map((f, i) => (
          <div key={f[0]} className={'q glass reveal' + (open === i ? ' open' : '')} style={d(`${i * 0.06}s`)}><button type="button" onClick={() => setOpen(open === i ? null : i)}>{f[0]}<span>+</span></button><div className="qa"><div><p>{f[1]}</p></div></div></div>))}</div>
      </div></section>
    </div>
  )
}
