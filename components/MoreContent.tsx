'use client'
import type React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { useImages } from './ImagesProvider'
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
const VISA: [string, string, string][] = [
  ['Tourist Visa Assistance', 'Guidance and application support for tourist visas to various international destinations.', 'tourist'],
  ['Visa Documentation', 'Assistance with preparing application forms, photographs, financial documents, hotel bookings, flight itineraries and other required paperwork.', 'docs'],
  ['Visa Appointment Assistance', 'Guidance with visa appointment scheduling and biometric procedures, wherever applicable.', 'appt'],
  ['Embassy & Consulate Guidelines', 'Information on country-specific visa requirements, processing procedures and documentation.', 'embassy'],
  ['E-Visa & Visa on Arrival', 'Assistance with online visa applications and information on visa-on-arrival facilities for eligible destinations.', 'evisa'],
  ['Group Visa Assistance', 'Coordinated visa application support for families, corporate travellers and group tour participants.', 'group'],
  ['Visa Application Tracking', 'Assistance in tracking application status and providing updates wherever available.', 'track'],
  ['Pre-Departure Guidance', 'Information on visa validity, entry requirements, permitted stay and other important travel regulations.', 'depart'],
]
const VISA_ICONS: Record<string, React.ReactNode> = {
  tourist: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" /></>,
  docs: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" /><path d="M14 3v5h5" /><path d="m9 14 2 2 4-4" /></>,
  appt: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 11h18" /><path d="m9 16 2 2 4-4" /></>,
  embassy: <><path d="M3 21h18" /><path d="M5 21V10l7-5 7 5v11" /><path d="M9 21v-6h6v6" /></>,
  evisa: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3" /><path d="m9 11 2 2 4-4" /></>,
  group: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" /></>,
  track: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  depart: <><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>,
}
const PASSPORT: [string, string, string][] = [
  ['Fresh Applications', 'First-time passport applications with form filling, document checks and appointment guidance.', 'fresh'],
  ['Renewals & Re-issue', 'Expired, damaged or full passports renewed with the correct supporting documents.', 'renew'],
  ['Child & Minor Passports', 'Parental consent, documentation and appointment support for applicants under 18.', 'child'],
  ['Lost or Damaged Passports', 'Guidance on police reporting, replacement applications and urgent travel options.', 'lost'],
  ['Name & Address Changes', 'Correcting personal details or updating your address with the right proofs.', 'change'],
  ['Appointment & Tatkal Support', 'Slot guidance and priority processing options wherever they are available.', 'appt'],
]
const PASSPORT_ICONS: Record<string, React.ReactNode> = {
  fresh: <><rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="10" r="3" /><path d="M8 17h8" /></>,
  renew: <><path d="M20 12a8 8 0 1 1-2.3-5.7" /><path d="M20 4v5h-5" /><path d="M9 12h6" /></>,
  child: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /><path d="M9 8h6" /></>,
  lost: <><path d="M12 3 3 20h18L12 3z" /><path d="M12 9v4M12 16h.01" /></>,
  change: <><path d="M4 6h16M4 12h10M4 18h7" /><path d="m17 14 3 3-3 3" /></>,
  appt: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 11h18" /><path d="m9 16 2 2 4-4" /></>,
}
const JUMP: [string, string][] = [['Flights', '#flights'], ['Visa', '#visa'], ['Travel Insurance', '#insurance'], ['Passport Assistance', '#passport']]
export default function MoreContent() {
  useSiteEffects()
  const { findAny } = useImages()
  const flightPic = findAny('flight', 'flights', 'flight-hero', 'air-travel', 'airplane', 'plane')
  const insurancePic = findAny('insurance', 'travel-insurance', 'insurance-hero', 'travel-protect', 'protection', 'medical')
  const [inTab, setInTab] = useState(0)
  return (
    <div className="pg">
      <header className="ph"><div className="orb o1" /><div className="orb o2" /><div className="wrap">
        <span className="crumb glass reveal">Home <b>/</b> More</span>
        <h1 className="reveal" style={{ '--d': '.1s' } as React.CSSProperties}>Everything else, <em>handled</em>.</h1>
        <p className="reveal" style={{ '--d': '.2s' } as React.CSSProperties}>Flights, visas, travel insurance and passport assistance — the practical details that make a journey effortless.</p>
        <div className="sv-jump reveal" style={{ '--d': '.3s' } as React.CSSProperties} role="navigation" aria-label="More services">
          {JUMP.map(([n, h]) => <a key={h} href={h} className="glass">{n}</a>)}
        </div>
      </div></header>

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

      <section className="sv-sec" id="visa">
        <div className="wrap">
          <div className="head reveal">
            <div>
              <span className="eyebrow">Visa Services</span>
              <h2>Visas, without the <em>guesswork</em></h2>
            </div>
            <p className="sub">Comprehensive visa assistance for international travellers — from understanding requirements and preparing documentation to appointments and pre-departure guidance.</p>
          </div>

          <div className="sv-feature">
            <div className="sv-copy reveal">
              <span className="eyebrow">Visa assistance</span>
              <h3>Paperwork, prepared <em>properly</em></h3>
              <p>We provide comprehensive visa assistance services for international travellers, helping our guests navigate the visa application process smoothly and conveniently. From understanding visa requirements to preparing the necessary documentation, our team offers guidance at every step to make international travel planning hassle-free.</p>
              <ul className="fl-points">
                <li>Destination-specific document checklists</li>
                <li>Forms, photos and financial-document review</li>
                <li>Appointment, biometric and interview guidance</li>
              </ul>
              <Link href="/contact" className="btn pri">Start my visa application →</Link>
            </div>
            <div className="sv-panel glass reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
              <span className="sv-panel-k">How it works</span>
              <ol className="sv-steps">
                <li><b>01</b><div><strong>Share your trip</strong><small>Destination, travel dates and purpose of visit.</small></div></li>
                <li><b>02</b><div><strong>We prepare your file</strong><small>Checklist, forms, photos and financial documents.</small></div></li>
                <li><b>03</b><div><strong>Appointments &amp; submission</strong><small>Biometric and interview slots, where required.</small></div></li>
                <li><b>04</b><div><strong>Track until decision</strong><small>Status updates right through to visa handover.</small></div></li>
              </ol>
            </div>
          </div>

          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 18 }}>Our services include</span>
          <div className="fl-grid">
            {VISA.map(([t, p, ic], i) => (
              <article key={t} className="fl-card glass reveal" style={{ '--d': `${i * 0.06}s` } as React.CSSProperties}>
                <span className="fl-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="fl-ico"><svg viewBox="0 0 24 24" aria-hidden="true">{VISA_ICONS[ic]}</svg></div>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>

          <div className="fl-foot reveal">
            <p><b>Visa approval is always at the discretion of the embassy or immigration authority.</b> We prepare and advise — the decision rests with them.</p>
            <Link href="/contact" className="btn gh">Ask a visa question →</Link>
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

      <section className="sv-sec sv-alt" id="passport">
        <div className="wrap">
          <div className="head reveal">
            <div>
              <span className="eyebrow">Passport Assistance</span>
              <h2>Passports, <em>painlessly</em> renewed</h2>
            </div>
            <p className="sub">From first applications to lost-passport emergencies, we help you assemble the right documents and keep your appointment on track.</p>
          </div>

          <div className="sv-feature sv-rev">
            <div className="sv-panel glass reveal">
              <span className="sv-panel-k">How it works</span>
              <ol className="sv-steps">
                <li><b>01</b><div><strong>Check eligibility</strong><small>The right scheme for fresh, renewal or re-issue.</small></div></li>
                <li><b>02</b><div><strong>Gather documents</strong><small>Proofs, photos and parental consent where needed.</small></div></li>
                <li><b>03</b><div><strong>Book the appointment</strong><small>Slot guidance for PSK, PSLK or consular services.</small></div></li>
                <li><b>04</b><div><strong>Submit &amp; follow up</strong><small>Status tracking until the passport is dispatched.</small></div></li>
              </ol>
            </div>
            <div className="sv-copy reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
              <span className="eyebrow">Passport assistance</span>
              <h3>Your passport, <em>expedition-ready</em></h3>
              <p>Whether it’s your first passport or a last-minute re-issue, we guide you through the correct process for your city and timeline.</p>
              <ul className="fl-points">
                <li>Fresh, renewal and re-issue applications</li>
                <li>Minor, lost, damaged and name-change cases</li>
                <li>Appointment slots and tatkal guidance where available</li>
              </ul>
              <Link href="/contact" className="btn pri">Get passport help →</Link>
            </div>
          </div>

          <div className="fl-grid">
            {PASSPORT.map(([t, p, ic], i) => (
              <article key={t} className="fl-card glass reveal" style={{ '--d': `${i * 0.06}s` } as React.CSSProperties}>
                <span className="fl-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="fl-ico"><svg viewBox="0 0 24 24" aria-hidden="true">{PASSPORT_ICONS[ic]}</svg></div>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>

          <div className="fl-foot reveal">
            <p><b>Government fees and processing times are set by the issuing authority.</b> We’ll confirm current timelines before you apply.</p>
            <Link href="/contact" className="btn gh">Book a document check →</Link>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}><div className="wrap">
        <div className="cta glass reveal" style={{ marginTop: 90 }}><span className="eyebrow">Need a hand?</span><h2>One desk for the <em>whole</em> journey</h2><p className="sub">Pair your flights and visa with a hand-crafted itinerary — or ask us to handle everything end to end.</p><Link href="/contact" className="btn pri">Talk to a travel designer →</Link></div>
      </div></section>
    </div>
  )
}
