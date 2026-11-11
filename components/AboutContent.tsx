'use client'
import type React from 'react'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { useImages } from './ImagesProvider'
import Pic from './Pic'
import { ABOUT as A } from '@/data/about'

// A photo slot: shows public/images/<name>.<ext> when it exists, otherwise a dashed placeholder with the size to use.
function Ph({ name, label }: { name: string; label: string }) {
  const { find } = useImages()
  return find(name) ? <div className="phi"><Pic name={name} alt={label.split(' · ')[0]} /></div> : <div className="pimg" data-l={label} />
}

const MICE: [string, string[], string][] = [
  ['International', A.intl, 'intl'],
  ['Domestic', A.dom, 'dom'],
]

export default function AboutContent() {
  useSiteEffects()
  const { list } = useImages()
  const logos = useMemo(() => {
    const items = list('partners')
    // Duplicate the row so the marquee can loop seamlessly.
    return items.length ? [...items, ...items] : []
  }, [list])
  const [yr, setYr] = useState('All')
  const [q, setQ] = useState('')
  const total = A.departures.reduce((s, r) => s + r[2], 0)
  const rows = A.departures.filter(r =>
    (yr === 'All' || r[3] === yr) &&
    (!q.trim() || r.join(' ').toLowerCase().includes(q.trim().toLowerCase()))
  )
  const d = (s: string) => ({ '--d': s }) as React.CSSProperties
  return (
    <div className="pg">
      <header className="ph abt-hero">
        <div className="orb o1" /><div className="orb o2" />
        <div className="wrap">
          <span className="crumb glass reveal">Home <b>/</b> About us</span>
          <h1 className="reveal" style={d('.1s')}>Your brand, our <em>passion</em>.</h1>
          <p className="reveal" style={d('.2s')}>Blithe Events &amp; Travels LLP — Bents — a premium travel and event management company for individuals, corporates and large groups.</p>
          <a href="#who" className="abt-cue reveal" style={d('.35s')}><span>Discover our story</span><i>↓</i></a>
        </div>
      </header>

      <section id="who" style={{ paddingTop: 20 }}>
        <div className="wrap abt-who">
          <div className="abt-art reveal">
            <Ph name="about/team" label="Team photo · 900×1100" />
            <div className="abt-badge glass">
              <b>31</b>
              <span>years of<br />leadership</span>
            </div>
          </div>
          <div className="reveal" style={d('.15s')}>
            <span className="eyebrow">Who are we</span>
            <h2>Journeys, <em>delivered</em> with care</h2>
            {A.who.map((t, i) => <p key={i} className="abt-lead" style={i === 0 ? { marginTop: 22 } : undefined}>{t}</p>)}
            <blockquote className="quo abt-who-quote">“{A.quote}”</blockquote>
            <Link href="/contact" className="btn pri" style={{ marginTop: 14 }}>Talk to our team →</Link>
          </div>
        </div>
        <div className="wrap">
          <div className="stats abt-stats reveal">
            <div><b data-c="31">0</b><small>YEARS OF LEADERSHIP EXPERIENCE</small></div>
            <div><b data-c={A.departures.length} data-plus="no">0</b><small>GRAND DEPARTURES · 2024–26</small></div>
            <div><b data-c={total} data-plus="no">0</b><small>TRAVELLERS ON THOSE GROUPS</small></div>
            <div><b data-c="12" data-plus="no">0</b><small>CITIES WITH OUR OFFICES</small></div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="head reveal"><div><span className="eyebrow">Excellence in motion</span><h2>Built for <em>premium</em> delivery</h2></div><p className="sub">One accountable team, from the first brief to the final boarding pass.</p></div>
          <div className="abt-two">
            <div className="abt-panel glass reveal">
              <ul className="abt-check">{A.excellence.map(x => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="abt-panel glass reveal" style={d('.12s')}>
              <span className="eyebrow">Our specialisation</span>
              <h3>Everything <em>under one roof</em></h3>
              <div className="abt-tags">{A.specialization.map(x => <span key={x}>{x}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="head reveal"><div><span className="eyebrow">Management team</span><h2>The people <em>behind</em> Bents</h2></div><p className="sub">Decades of experience across travel, events and customer care.</p></div>
          <div className="abt-people">
            {A.management.map((m, i) => (
              <article key={m.name} className="abt-person glass reveal" style={d(`${i * 0.12}s`)}>
                <div className="abt-portrait abt-media" style={{ '--a': i ? '#d4a017' : '#0e9196', '--b': i ? '#6a3a1a' : '#064a52' } as React.CSSProperties}>
                  <Ph name={m.slot} label="Portrait · 600×750" />
                  <span className="abt-num">0{i + 1}</span>
                </div>
                <div className="abt-bio">
                  <small>{m.role}</small>
                  <h3>{m.name}</h3>
                  <p>{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="abt-mosaic reveal" style={d('.1s')}>
            <div className="abt-media abt-mosaic-main"><Ph name="about/team-1" label="Team Bents · 1200×800" /></div>
            <div className="abt-media"><Ph name="about/team-2" label="Team · 600×400" /></div>
            <div className="abt-media"><Ph name="about/team-3" label="Team · 600×400" /></div>
            <div className="abt-media"><Ph name="about/team-4" label="Team · 600×400" /></div>
            <div className="abt-media"><Ph name="about/team-5" label="Team · 600×400" /></div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="head reveal"><div><span className="eyebrow">M.I.C.E. groups</span><h2>Groups we’ve taken <em>everywhere</em></h2></div><p className="sub">Meetings, incentives, conferences and exhibitions — across India and around the world.</p></div>
          <div className="abt-mice">
            {MICE.map(([t, places, k], i) => (
              <div key={t} className="abt-mice-card glass reveal" style={d(`${i * 0.12}s`)}>
                <div className="abt-mice-head">
                  <span className="eyebrow">{t}</span>
                  <h3>M.I.C.E. Groups</h3>
                </div>
                <div className="abt-tags abt-tags-sm">{places.map(x => <span key={x}>{x}</span>)}</div>
                <div className="abt-mice-photos">
                  {[1, 2, 3].map(n => <div key={n} className="abt-media"><Ph name={`about/mice-${k}-${n}`} label="Group photo · 800×500" /></div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="head reveal"><div><span className="eyebrow">Our grand departures</span><h2>Corporate groups, <em>on the move</em></h2></div>
            <p className="sub">{A.departures.length} departures and {total.toLocaleString('en-IN')} travellers across 2024–26.</p></div>

          <div className="abt-toolbar glass reveal">
            <div className="chips abt-chips">
              {A.years.map(y => <button key={y} type="button" aria-pressed={y === yr} className={y === yr ? 'on' : ''} onClick={() => setYr(y)}>{y}</button>)}
            </div>
            <label className="abt-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-4.5-4.5" /></svg>
              <input aria-label="Search departures by corporate or destination" placeholder="Search corporate or destination…" value={q} onChange={e => setQ(e.target.value)} />
              {q && <button type="button" aria-label="Clear search" onClick={() => setQ('')}>×</button>}
            </label>
          </div>

          <p className="abt-count" aria-live="polite">Showing <b>{rows.length}</b> of {A.departures.length} departures</p>

          <div className="abt-table glass reveal">
            <div className="abt-thead" aria-hidden="true"><span>Corporate</span><span>Destination</span><span>Travellers</span><span>Year</span></div>
            {rows.map((r, i) => (
              <div className="abt-row" key={`${r[0]}-${r[1]}-${i}`}>
                <b className="abt-co">{r[0]}</b>
                <span className="abt-dest">{r[1]}</span>
                <span className="abt-pax">{r[2].toLocaleString('en-IN')} pax</span>
                <span className="abt-year">{r[3]}</span>
              </div>
            ))}
            {!rows.length && <p className="abt-empty">No departures match your search.</p>}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="head reveal"><div><span className="eyebrow">Glimpses of our events</span><h2>Stages we’ve <em>set</em></h2></div></div>
          <div className="abt-events">
            {A.events.map((e, i) => (
              <figure key={e} className="abt-event reveal" style={d(`${(i % 4) * 0.08}s`)}>
                <div className="abt-media"><Ph name={`about/event-${e.toLowerCase().replace(/\s+/g, '-')}`} label={`${e} · 800×500`} /><span className="abt-event-idx">0{i + 1}</span></div>
                <figcaption>{e}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="head reveal"><div><span className="eyebrow">Why choose Bents?</span><h2>Reasons clients <em>stay</em></h2></div></div>
          <blockquote className="abt-quote reveal">{A.whyQuote}</blockquote>
          <div className="abt-pillars">
            {A.pillars.map((p, i) => (
              <div key={p[0]} className="abt-pillar glass reveal" style={d(`${(i % 3) * 0.08}s`)}>
                <span className="abt-pillar-idx">0{i + 1}</span>
                <i>✦</i>
                <h3>{p[0]}</h3>
                <p>{p[1]}</p>
              </div>
            ))}
          </div>
          <div className="abt-panel glass reveal" style={{ marginTop: 26 }}>
            <span className="eyebrow">Why choose our leisure team?</span>
            <ul className="abt-check abt-check-2">{A.leisure.map(x => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="head reveal" style={{ justifyContent: 'center', textAlign: 'center' }}><div><span className="eyebrow">Our clients</span><h2>Trusted by <em>leading</em> brands</h2></div></div>
          {logos.length ? (
            <div className="abt-logos reveal" aria-label="Client logos">
              <div className="abt-logo-track">{logos.map((l, i) => <img key={`${l.src}-${i}`} src={l.src} alt={l.name} loading="lazy" decoding="async" />)}</div>
            </div>
          ) : (
            <div className="abt-clients reveal">{A.clients.map(c => <span key={c}>{c}</span>)}</div>
          )}
          <p className="eyebrow reveal" style={{ textAlign: 'center', margin: '44px 0 16px' }}>Government &amp; public sector</p>
          <div className="abt-clients abt-gov reveal">{A.government.map(c => <span key={c}>{c}</span>)}</div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="head reveal"><div><span className="eyebrow">Our offices</span><h2>Find us <em>across India</em></h2></div><p className="sub">A registered office in Gurugram and branch offices in 12 cities.</p></div>
          <div className="abt-offices">
            {A.offices.map((o, i) => (
              <article key={`${o[0]}-${i}`} className={'abt-office glass reveal' + (o[3] ? ' reg' : '')} style={d(`${(i % 3) * 0.07}s`)}>
                <div className="abt-loc"><small>{o[1]}</small>{o[3] && <span className="abt-hq">Registered</span>}</div>
                <h3>{o[0]}</h3>
                <p>{o[2]}</p>
              </article>
            ))}
          </div>

          <div className="cta abt-cta glass reveal">
            <span className="eyebrow">Get in touch</span>
            <h2>Let’s plan your next <em>journey</em></h2>
            <p className="sub">Tell us where you’d like to go — our team will shape the rest.</p>
            <div className="abt-contact">
              <div><small>Email</small><div className="abt-contact-row">{A.emails.map(e => <a key={e} href={`mailto:${e}`}>{e}</a>)}</div></div>
              <div><small>Call</small><div className="abt-contact-row">{A.phones.map(p => <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>)}</div></div>
            </div>
            <Link href="/contact" className="btn pri">Send an enquiry →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
