'use client'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { useImages } from './ImagesProvider'
import { LEISURE_TOURS } from '@/data/leisure-tours'
const PUBLIC_TOURS = LEISURE_TOURS
const SLUG: Record<string, string> = Object.fromEntries(PUBLIC_TOURS.map(x => [x.name, x.slug]))
type Tour = [string, string, string, string[], number, string, number, number, string, string, string, string[]]
const T: Tour[] = PUBLIC_TOURS.map(x => [x.name, x.region, x.place, x.cats, x.days.length, x.label, x.price, x.rating, x.a, x.b, x.desc, x.img || []] as Tour)
const CATS: string[] = ['All','Beach','Adventure','Culture','Honeymoon','Family','Wildlife','Luxury','Hills']
const LC: Record<string, string> = {'Bestseller':'','New':'teal','Few seats left':'red','Honeymoon pick':'pink','Group departure':'blue','Family favourite':'green'}
const SEG = [['all', 'All tours'], ['dom', 'Domestic'], ['intl', 'International']]
const FLIGHTS: [string, string, string][] = [
  ['Domestic & International Flights', 'Bookings across major airlines and destinations worldwide.', 'plane'],
  ['Best Available Fares', 'Competitive airfares matched to your travel preferences and budget.', 'fares'],
  ['Flexible Flight Options', 'One-way, round-trip, multi-city and connecting itineraries.', 'route'],
  ['Seat Selection', 'Window, aisle and adjacent seats requested, subject to airline availability.', 'seat'],
  ['Special Assistance', 'Wheelchair support, special meals and other passenger requirements.', 'assist'],
  ['Baggage Information', 'Clear guidance on allowances, regulations and what to pack.', 'baggage'],
  ['Ticket Modifications & Cancellations', 'Rescheduling, cancellations and refunds handled as per airline policy.', 'modify'],
  ['Group Flight Bookings', 'Tailored arrangements for families, corporate travellers and group tours.', 'group'],
]
const FL_ICONS: Record<string, React.ReactNode> = {
  plane: <><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7z" /></>,
  fares: <><circle cx="8" cy="8" r="2" /><circle cx="16" cy="16" r="2" /><path d="M18 6 6 18" /></>,
  route: <><path d="M4 17h4a4 4 0 0 0 4-4V9a4 4 0 0 1 4-4h4" /><path d="m17 2 3 3-3 3" /><path d="m7 14-3 3 3 3" /></>,
  seat: <><path d="M7 4v9a2 2 0 0 0 2 2h6" /><path d="M7 15v5" /><path d="M15 15v5h4" /><path d="M4 20h16" /></>,
  assist: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />,
  baggage: <><path d="M6 8h12v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z" /><path d="M9 8V5h6v3" /><path d="M10 12v5M14 12v5" /></>,
  modify: <><path d="M20.5 9A8.5 8.5 0 1 0 21 14" /><path d="M21 4v5h-5" /></>,
  group: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" /></>,
}
const INSURANCE: [string, string, string][] = [
  ['Medical Emergency Coverage', 'Financial protection against unexpected medical expenses and hospitalisation during travel, as per policy terms.', 'medical'],
  ['Emergency Medical Evacuation', 'Coverage for emergency transportation to an appropriate medical facility, subject to policy conditions.', 'evac'],
  ['Trip Cancellation & Interruption', 'Protection against eligible financial losses arising from unforeseen trip cancellations or interruptions.', 'trip'],
  ['Baggage Loss & Delay', 'Coverage for eligible losses or delays involving checked-in baggage.', 'baggage'],
  ['Passport Loss Assistance', 'Financial assistance for expenses related to obtaining a replacement passport, as per policy terms.', 'passport'],
  ['Flight Delays & Missed Connections', 'Coverage for eligible expenses arising from flight delays or missed connections.', 'delay'],
  ['Personal Accident Coverage', 'Financial protection in case of accidental injury or death during the insured journey.', 'accident'],
  ['Emergency Assistance', 'Access to assistance services for medical emergencies and other covered travel-related situations.', 'help'],
]
const IN_TABS: [string, string][] = [
  ['Medical', 'Emergency treatment, hospitalisation and medical evacuation support when you need it most.'],
  ['Journey', 'Protection for cancellations, interruptions, flight delays and missed connections.'],
  ['Belongings', 'Support for checked-in baggage loss or delay, plus passport replacement assistance.'],
  ['Accident', 'Personal accident cover for accidental injury during the insured journey.'],
]
const IN_ICONS: Record<string, React.ReactNode> = {
  medical: <><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></>,
  evac: <><path d="M12 21s-7-4.4-7-10V5.5L12 3l7 2.5V11c0 5.6-7 10-7 10z" /><path d="M8 11h8M12 7v8" /></>,
  trip: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 11h18" /><path d="m9.5 15 5 4M14.5 15l-5 4" /></>,
  baggage: <><rect x="4" y="7" width="16" height="13" rx="2" /><path d="M9 7V4h6v3M9 12v4M15 12v4" /></>,
  passport: <><path d="M6 3h11a2 2 0 0 1 2 2v16H8a2 2 0 0 1-2-2V3z" /><path d="M6 3a2 2 0 0 0-2 2v14" /><path d="M11 7h4M11 11h4M11 15h2" /></>,
  delay: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  accident: <><path d="M12 3 3 20h18L12 3z" /><path d="M12 9v4M12 16h.01" /></>,
  help: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="2" y="14" width="4" height="6" rx="2" /><rect x="18" y="14" width="4" height="6" rx="2" /><path d="M20 20a4 4 0 0 1-4 3h-2" /></>,
}
export default function LeisureContent() {
  useSiteEffects()
  const { findAny } = useImages()
  const flightPic = findAny('flight', 'flights', 'flight-hero', 'air-travel', 'airplane', 'plane')
  const insurancePic = findAny('insurance', 'travel-insurance', 'insurance-hero', 'travel-protect', 'protection', 'medical')
  const [r, setR] = useState('all')
  const [c, setC] = useState('All')
  const [q, setQ] = useState('')
  const [s, setS] = useState('pop')
  const [inTab, setInTab] = useState(0)
  const prev = useRef<Set<string>>(new Set())
  useEffect(() => {
    document.body.dataset.cl = 'View'
    const f = () => { const h = location.hash; if (h === '#domestic') setR('dom'); else if (h === '#international') setR('intl') }
    f(); addEventListener('hashchange', f)
    return () => { delete document.body.dataset.cl; removeEventListener('hashchange', f) }
  }, [])
  const ok = (t: Tour, skip?: string) => (skip === 'r' || r === 'all' || t[1] === r) && (skip === 'c' || c === 'All' || t[3].includes(c)) && (!q || (t[0] + ' ' + t[2] + ' ' + t[3].join(' ') + ' ' + t[5] + ' ' + t[10]).toLowerCase().includes(q.toLowerCase()))
  const S: Record<string, (a: Tour, b: Tour) => number> = { ds: (a, b) => a[4] - b[4], dl: (a, b) => b[4] - a[4] }
  let L = T.filter(t => ok(t))
  if (S[s]) L = [...L].sort(S[s])
  const seen = prev.current
  useEffect(() => { prev.current = new Set(L.map(t => t[0])) })
  const reset = () => { setR('all'); setC('All'); setQ('') }
  return (
    <div className="pg">
      <header className="ph"><div className="orb o1" /><div className="orb o2" /><div className="wrap">
        <span className="crumb glass reveal">Home <b>/</b> Leisure</span>
        <h1 className="reveal" style={{ '--d': '.1s' } as React.CSSProperties}>Holidays designed around <em>you</em>.</h1>
        <p className="reveal" style={{ '--d': '.2s' } as React.CSSProperties}>Browse hand-crafted domestic and international tours — search, filter by theme and find your next escape.</p>
      </div></header>
      <section style={{ paddingTop: 20 }}><div className="wrap">
        <div className="fp glass reveal">
          <div className="r1">
            <label className="sb glass">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search destinations, themes or tour names…" autoComplete="off" />
              {q && <button type="button" aria-label="Clear" onClick={() => setQ('')}>✕</button>}
            </label>
            <select className="srt" value={s} onChange={e => setS(e.target.value)}>
              <option value="pop">Sort: Popular</option><option value="ds">Duration: shortest</option><option value="dl">Duration: longest</option>
            </select>
          </div>
          <div className="r2">
            <div className="seg">{SEG.map(([k, n]) => <button key={k} className={r === k ? 'on' : ''} onClick={() => setR(k)}>{n}<small>{T.filter(t => ok(t, 'r') && (k === 'all' || t[1] === k)).length}</small></button>)}</div>
            <div className="cats">{CATS.map(k => { const n = T.filter(t => ok(t, 'c') && (k === 'All' || t[3].includes(k))).length; return <button key={k} className={(c === k ? 'on' : '') + (n ? '' : ' off')} onClick={() => setC(k)}>{k}<small>{n}</small></button> })}</div>
          </div>
        </div>
        <div className="cnt">Showing <b>{L.length}</b> of {T.length} tours{q ? ` for “${q}”` : ''}</div>
        <div className="g3 tgrid">
          {L.length ? L.map((t, i) => { const pic = findAny(t[2], ...t[11]); return (
            <Link key={t[0]} href={SLUG[t[0]] ? `/leisure/${SLUG[t[0]]}` : '/contact'} className={'post glass' + (seen.has(t[0]) ? '' : ' new')} style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="img" style={{ '--a': t[8], '--b': t[9] } as React.CSSProperties}>
                {pic ? <img className="pic" src={pic} alt={t[2]} loading="lazy" decoding="async" /> : <div className="pimg" data-l="Tour image · 800×500" />}
                {t[5] && <span className={'lbl ' + LC[t[5]]}>{t[5]}</span>}
                <span className="rg">{t[1] === 'dom' ? 'Domestic' : 'International'}</span>
              </div>
              <div className="pt">
                <div className="mt"><b>{t[2]}</b><span>{t[4]} days / {t[4] - 1} nights</span></div>
                <h3>{t[0]}</h3><p>{t[10]}</p>
                <div className="tf"><span className="rt">★ {t[7]}</span></div>
                <span className="rd">View itinerary →</span>
              </div>
            </Link>
          ) }) : (
            <div className="empty glass"><h3>No tours match your search</h3><p>Try a different keyword, or clear the filters.</p><button className="btn pri" onClick={reset}>Reset filters</button></div>
          )}
        </div>
      </div></section>

      <section className="fl-sec" id="flights">
        <div className="wrap">
          <div className="head reveal">
            <div>
              <span className="eyebrow">Flights</span>
              <h2>Every journey begins with a <em>seamless</em> flight</h2>
            </div>
            <p className="sub">Comprehensive flight booking for domestic and international destinations — we make every step smooth, convenient and hassle-free, from the first search to the final boarding call.</p>
          </div>

          <div className="fl-feature">
            <div className="fl-media reveal">
              {flightPic
                ? <img className="pic" src={flightPic} alt="Flight travel" loading="lazy" decoding="async" />
                : <div className="pimg" data-l="Flight image · 1000×700" />}
              <div className="fl-pass">
                <div className="fl-pass-top"><span>Boarding pass</span><b>Wanderline Air Desk</b></div>
                <div className="fl-pass-route">
                  <div><small>From</small><b>BOM</b><span>Mumbai</span></div>
                  <div className="fl-pass-path" aria-hidden="true"><i /><b>✈</b><i /></div>
                  <div><small>To</small><b>DXB</b><span>Dubai</span></div>
                </div>
                <div className="fl-pass-meta">
                  <div><small>Flight</small><b>WL 204</b></div>
                  <div><small>Seat</small><b>12A</b></div>
                  <div><small>Gate</small><b>14</b></div>
                  <div><small>Boarding</small><b>09:40</b></div>
                  <span className="fl-pass-code" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="fl-lead reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
              <span className="eyebrow">The air desk</span>
              <h3>One team for every <em>take-off</em></h3>
              <p>From quick weekend hops to multi-city international routings, our flight specialists compare the best available fares and tailor every detail around your plans.</p>
              <ul className="fl-points">
                <li>Major airlines and worldwide routes</li>
                <li>Seats, meals and special assistance arranged</li>
                <li>Reschedules, cancellations and refunds handled</li>
              </ul>
              <Link href="/contact" className="btn pri">Talk to a flight specialist →</Link>
            </div>
          </div>

          <div className="fl-grid">
            {FLIGHTS.map(([t, p, ic], i) => (
              <article key={t} className="fl-card glass reveal" style={{ '--d': `${i * 0.06}s` } as React.CSSProperties}>
                <span className="fl-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="fl-ico"><svg viewBox="0 0 24 24" aria-hidden="true">{FL_ICONS[ic]}</svg></div>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>

          <div className="fl-foot reveal">
            <p><b>Fares and availability</b> are subject to airline confirmation. Baggage and travel rules follow each carrier’s policy.</p>
            <Link href="/contact" className="btn gh">Plan my flights →</Link>
          </div>
        </div>
      </section>

      <section className="in-sec" id="insurance">
        <div className="wrap">
          <div className="head reveal">
            <div>
              <span className="eyebrow">Travel Insurance</span>
              <h2>Travel far, worry <em>less</em></h2>
            </div>
            <p className="sub">Comprehensive travel insurance solutions that help our guests enjoy a safe, secure and worry-free journey — from medical emergencies to missed connections.</p>
          </div>

          <div className="in-feature">
            <div className="in-media reveal">
              {insurancePic
                ? <img className="pic" src={insurancePic} alt="Travel insurance" loading="lazy" decoding="async" />
                : <div className="pimg" data-l="Insurance image · 1000×700" />}
              <div className="in-shield" aria-hidden="true">
                <span className="in-shield-ring" /><span className="in-shield-ring d2" />
                <svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.6 3 8.2 7 9.6 4-1.4 7-5 7-9.6V6l-7-3z" /><path d="m9 11.6 2.1 2.1 4.3-4.3" /></svg>
              </div>
              <div className="in-cover">
                <div className="in-cover-top"><span>Your protection</span><b>Wanderline Assure</b></div>
                <div className="in-cover-main">
                  <div className="in-dial">
                    <svg viewBox="0 0 120 120" aria-hidden="true">
                      <circle className="in-dial-bg" cx="60" cy="60" r="52" />
                      <circle className="in-dial-fg" cx="60" cy="60" r="52" pathLength={100} />
                    </svg>
                    <div className="in-dial-txt"><b data-c="8">8</b><small>cover types</small></div>
                  </div>
                  <div className="in-tabs" aria-label="Coverage highlights">
                    {IN_TABS.map(([n], i) => (
                      <button key={n} type="button" aria-pressed={inTab === i} className={inTab === i ? 'on' : ''} onClick={() => setInTab(i)}><i />{n}</button>
                    ))}
                  </div>
                </div>
                <p className="in-note" key={inTab} aria-live="polite">{IN_TABS[inTab][1]}</p>
                <div className="in-cover-meta">
                  <div><small>Assistance</small><b>24/7</b></div>
                  <div><small>Claims</small><b>Guided</b></div>
                  <div><small>Cover</small><b>Global</b></div>
                  <span className="in-scan" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="in-lead reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
              <span className="eyebrow">Protected at every step</span>
              <h3>Cover that travels <em>with you</em></h3>
              <p>From the first flight to the last transfer, we help protect your health, your plans and your belongings — with clear guidance if something goes wrong.</p>
              <ul className="in-points">
                <li>Medical emergencies and evacuation support</li>
                <li>Trip, baggage and passport protection</li>
                <li>Flight delay and missed connection cover</li>
              </ul>
              <div className="in-stats">
                <div><b data-c="8">8</b><small>Cover types</small></div>
                <div><b data-c="24" data-suffix="/7">24/7</b><small>Assistance</small></div>
                <div><b data-c="100" data-suffix="%">100%</b><small>Journey focus</small></div>
              </div>
              <Link href="/contact" className="btn pri">Get covered →</Link>
            </div>
          </div>

          <div className="in-grid">
            {INSURANCE.map(([t, p, ic], i) => (
              <article key={t} className="in-card glass reveal" style={{ '--d': `${i * 0.05}s` } as React.CSSProperties}>
                <span className="in-glow" aria-hidden="true" />
                <div className="in-ico"><svg viewBox="0 0 24 24" aria-hidden="true">{IN_ICONS[ic]}</svg></div>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>

          <div className="in-foot reveal">
            <p><b>All cover is subject to policy terms, conditions and exclusions.</b> Share your trip details and we’ll help you choose the right protection.</p>
            <Link href="/contact" className="btn gh">Request an insurance quote →</Link>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}><div className="wrap">
        <div className="cta glass reveal" style={{ marginTop: 90 }}><span className="eyebrow">Can’t find it?</span><h2>We’ll build your <em>perfect</em> trip</h2><p className="sub">Tell us where, when and how — a travel designer will craft a custom itinerary.</p><Link href="/contact" className="btn pri">Request a custom tour →</Link></div>
      </div></section>
    </div>
  )
}
