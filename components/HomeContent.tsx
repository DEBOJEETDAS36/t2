'use client'
import type React from 'react'
import { useState } from 'react'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { useImages } from './ImagesProvider'
import Pic from './Pic'
import HeroSlider from './HeroSlider'
import OfficeMap from './OfficeMap'
import { OFFICES } from '@/data/offices'
import { useEnquiry } from '@/lib/useEnquiry'
import Link from 'next/link'
import Packages from './Packages'
const N = ['Emirates','Singapore Airlines','Marriott','Taj Hotels','Qatar Airways','Hyatt','IndiGo','Accor']
export default function HomeContent() {
  useSiteEffects()
  const { find, list } = useImages()
  const [hot, setHot] = useState('')
  const logos = list('partners')
  const loop = <T,>(a: T[]) => { const half = Array.from({ length: Math.max(1, Math.ceil(8 / a.length)) }).flatMap(() => a); return [...half, ...half] }
  const enq = useEnquiry('contact',{ extra: { source: 'home page' } })
  const sent = enq.sent
  return (<>

<header className="hero bnon"><HeroSlider />

<div className="wrap grid">
<div>
<span className="pill glass reveal"><b></b>Now booking Winter &amp; 2027 departures</span>
<h1 className="reveal" style={{'--d':'.1s'} as React.CSSProperties}>Begin your <em>journey</em> beyond the ordinary.</h1>
<p className="reveal" style={{'--d':'.2s'} as React.CSSProperties}>Hand-crafted escapes to the world’s most breathtaking places — planned end to end, so you only have to arrive.</p>
<div className="cta reveal" style={{'--d':'.3s'} as React.CSSProperties}><a href="#packages" className="btn pri">Explore packages →</a><a href="#about" className="btn gh">Why Wanderline</a></div>
</div>
<div className="visual reveal" style={{'--d':'.2s'} as React.CSSProperties}>

<div className="chip glass c1"><strong>120+</strong>Destinations</div>
<div className="chip glass c2"><strong>4.9 ★</strong>Traveller rating</div>
</div></div>
</header>

<div className="search"><div className="wrap reveal"><div className="bar glass">
<label><small>Destination</small><select><option>Anywhere</option><option>Bali</option><option>Dubai</option><option>Japan</option><option>Vietnam</option><option>Egypt</option></select></label>
<label><small>Duration</small><select><option>Any length</option><option>4–6 days</option><option>7–10 days</option><option>11+ days</option></select></label>
<label><small>Travel month</small><select><option>Flexible</option><option>November</option><option>December</option><option>January</option></select></label>
<a href="#packages" className="btn pri">Search</a>
</div>
<div className="stats">
<div><b data-c="15">0</b><small>YEARS OF EXPERIENCE</small></div>
<div><b data-c="25000">0</b><small>HAPPY TRAVELLERS</small></div>
<div><b data-c="120">0</b><small>DESTINATIONS</small></div>
<div><b data-c="98">0</b><small>% REPEAT CLIENTS</small></div>
</div></div></div>

<Packages />

<section id="destinations" style={{'paddingTop':'0'} as React.CSSProperties}><div className="wrap">
<div className="head reveal"><div><span className="eyebrow">Destinations</span><h2>Where will you <em>wake up</em> next?</h2></div><p className="sub">Domestic gems to far-flung horizons — pick a region and we’ll shape the rest.</p></div>
<div className="dest">
<div className="d reveal" style={{'--a':'#0e9196','--b':'#072b36'} as React.CSSProperties}><Pic name="destinations/southeast-asia" alt="Southeast Asia" /><span><small>Southeast Asia</small>Bali · Thailand · Vietnam</span></div>
<div className="d reveal" style={{'--d':'.1s','--a':'#d4a017','--b':'#6a3a1a'} as React.CSSProperties}><Pic name="destinations/dubai" alt="Middle East" /><span><small>Middle East</small>Dubai</span></div>
<div className="d reveal" style={{'--d':'.2s','--a':'#4a7fb5','--b':'#1a2a52'} as React.CSSProperties}><Pic name="destinations/italy" alt="Europe" /><span><small>Europe</small>Italy</span></div>
<div className="d reveal" style={{'--d':'.1s','--a':'#2f9e7a','--b':'#0d3b3b'} as React.CSSProperties}><Pic name="destinations/kerala" alt="Domestic" /><span><small>Domestic</small>Kerala</span></div>
<div className="d reveal" style={{'--d':'.2s','--a':'#b85a7a','--b':'#2a2050'} as React.CSSProperties}><Pic name="destinations/south-africa" alt="Africa" /><span><small>Africa</small>South Africa</span></div>
</div></div></section>

<section style={{'paddingTop':'0'} as React.CSSProperties}><div className="wrap"><div className="teaser glass reveal"><div style={{'position':'relative'} as React.CSSProperties}><span className="eyebrow">Corporate &amp; MICE</span><h2>Events that move <em>teams</em></h2><p className="sub">Meetings, incentives, conferences and exhibitions — designed and delivered end to end.</p><div style={{'marginTop':'28px'} as React.CSSProperties}><Link href="/mice" className="btn pri">Explore MICE →</Link></div></div><div className="tz"><div><b>M</b>Meetings</div><div><b>I</b>Incentives</div><div><b>C</b>Conferences</div><div><b>E</b>Exhibitions</div></div></div></div></section>
<section className="about" id="about"><div className="wrap ab">
<div className="reveal"><span className="eyebrow">About us</span><h2>Travel, planned with <em>care</em></h2>
<p className="sub">We’re a small team of travel designers who obsess over the details you’ll remember — and the ones you’ll never have to think about.</p>
<div className="feat">
<div className="f glass"><i>✦</i><div><h3>Tailor-made itineraries</h3><p>Every day shaped around your pace, interests and budget.</p></div></div>
<div className="f glass"><i>◈</i><div><h3>Trusted local partners</h3><p>Vetted hotels, guides and transfers across 120+ destinations.</p></div></div>
<div className="f glass"><i>☾</i><div><h3>24/7 on-trip support</h3><p>A real person on call, wherever in the world you are.</p></div></div>
</div></div>
<div className="map reveal" style={{'--d':'.2s'} as React.CSSProperties}><OfficeMap hot={hot} setHot={setHot} /></div>
</div></section>

<section className="ofs"><div className="wrap"><div className="box glass reveal"><span className="eyebrow">Our offices</span><h2>Find us across <em>India</em></h2><p className="sub" style={{ margin: '14px auto 0' }}>Twelve offices, one team — wherever you are, a travel designer is close by.</p>
<div className="ofc">{OFFICES.map(o => <span key={o.n} className={'oc' + (hot === o.n ? ' hot' : '')} onMouseEnter={() => setHot(o.n)} onMouseLeave={() => setHot('')}>{o.n}{o.hq && <small>Head office</small>}</span>)}</div></div></div></section>
<section id="blogs"><div className="wrap">
<div className="head reveal"><div><span className="eyebrow">Journal</span><h2>Stories &amp; <em>inspiration</em></h2></div><Link href="/blogs" className="btn gh">All articles</Link></div>
<div className="blogs">
<Link href="/blogs/bali-beyond-the-beaches" className="blog glass reveal"><div className="img" data-n="Bali" style={{'--a':'#0e9196','--b':'#0b3b4d'} as React.CSSProperties}><Pic name="blogs/bali-beyond-the-beaches" alt="" /></div><div className="t"><small>Guide</small><h3>Bali beyond the beaches</h3><p>Quiet temples and rice terraces most visitors miss.</p></div></Link>
<Link href="/blogs/japan-in-autumn" className="blog glass reveal" style={{'--d':'.1s'} as React.CSSProperties}><div className="img" data-n="Japan" style={{'--a':'#d8584a','--b':'#3a2a4a'} as React.CSSProperties}><Pic name="blogs/japan-in-autumn" alt="" /></div><div className="t"><small>Season</small><h3>Japan in autumn</h3><p>When and where to catch the best foliage.</p></div></Link>
<Link href="/blogs/planning-an-egypt-cruise" className="blog glass reveal" style={{'--d':'.2s'} as React.CSSProperties}><div className="img" data-n="Nile" style={{'--a':'#e0a800','--b':'#3b5a4a'} as React.CSSProperties}><Pic name="blogs/planning-an-egypt-cruise" alt="" /></div><div className="t"><small>Tips</small><h3>Planning an Egypt cruise</h3><p>What to know before sailing the Nile.</p></div></Link>
</div></div></section>

<div className="partners"><p>Trusted by the world’s best</p>{logos.length ? <div className="track logos">{loop(logos).map((l,i)=><img key={i} src={l.src} alt={l.name} className={l.orig?'orig':''} loading="lazy" />)}</div> : <div className="track">{[...N,...N].map((n,i)=><span key={i}>{n}</span>)}</div>}</div>

<section><div className="wrap">
<div className="head reveal"><div><span className="eyebrow">Testimonials</span><h2>Here’s what our <em>travellers</em> say</h2></div></div>
<div className="tw">
<div className="t glass reveal"><div className="st">★★★★★</div><p className="q">“Every day felt effortless. The Bali itinerary was the best trip our family has taken.”</p><div className="who"><i>{find('testimonials/ananya-sen') ? <Pic name="testimonials/ananya-sen" alt="Ananya Sen" /> : 'AS'}</i><div>Ananya Sen<small>Bali, 2026</small></div></div></div>
<div className="t glass reveal" style={{'--d':'.1s'} as React.CSSProperties}><div className="st">★★★★★</div><p className="q">“Thoughtful, quick and always reachable. Japan ran like clockwork from start to finish.”</p><div className="who"><i>{find('testimonials/rohan-mehta') ? <Pic name="testimonials/rohan-mehta" alt="Rohan Mehta" /> : 'RM'}</i><div>Rohan Mehta<small>Japan, 2025</small></div></div></div>
<div className="t glass reveal" style={{'--d':'.2s'} as React.CSSProperties}><div className="st">★★★★★</div><p className="q">“They found places we’d never have discovered ourselves. We’re already planning the next one.”</p><div className="who"><i>{find('testimonials/priya-das') ? <Pic name="testimonials/priya-das" alt="Priya Das" /> : 'PD'}</i><div>Priya Das<small>Egypt, 2025</small></div></div></div>
</div></div></section>

<section className="contact" id="contact" style={{'paddingTop':'0'} as React.CSSProperties}><div className="wrap"><div className="box glass reveal">
<div><span className="eyebrow">Get in touch</span><h2>Let’s plan your <em>escape</em></h2>
<div className="info"><div><b>Call us</b>+91-XXXXXXXXXX</div><div><b>Email</b>hello@wanderline.com</div><div><b>Office</b>Howrah, West Bengal, India</div></div></div>
<form onSubmit={enq.onSubmit}>
<input name="name" className="in" placeholder="Your name" required /><input name="email" className="in" type="email" placeholder="Email address" required /><textarea name="message" className="in" placeholder="Tell us about your dream trip" maxLength={1000}></textarea>
<button className="btn pri" style={{'justifySelf':'start'} as React.CSSProperties}>{sent?'Thank you — we’ll be in touch ✓':'Send enquiry'}</button>{enq.err && <p className="ferr full">{enq.err}</p>}</form>
</div></div></section>

</>)
}
