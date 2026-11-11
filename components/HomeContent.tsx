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

<div className="hero-shell">
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
</div>

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
<div><b data-c="98" data-suffix="%">0</b><small>REPEAT CLIENTS</small></div>
</div></div></div>

<Packages />

<section id="destinations" style={{'paddingTop':'0'} as React.CSSProperties}><div className="wrap">
<div className="head reveal"><div><span className="eyebrow">Destinations</span><h2>Where will you <em>wake up</em> next?</h2></div><p className="sub">Domestic gems to far-flung horizons — pick a region and we’ll shape the rest.</p></div>
<div className="dest">
<div className="d reveal" style={{'--a':'#0e9196','--b':'#072b36'} as React.CSSProperties}><Pic name="destinations/Rajasthan" alt="Rajasthan" /><span><small>Desert</small>Rajasthan</span></div>
<div className="d reveal" style={{'--d':'.1s','--a':'#d4a017','--b':'#6a3a1a'} as React.CSSProperties}><Pic name="destinations/Kerala" alt="Kerala" /><span><small>Coastal</small>Kerala</span></div>
<div className="d reveal" style={{'--d':'.2s','--a':'#4a7fb5','--b':'#1a2a52'} as React.CSSProperties}><Pic name="destinations/Odisha" alt="Odisha" /><span><small>Mountain</small>Odisha</span></div>
<div className="d reveal" style={{'--d':'.1s','--a':'#2f9e7a','--b':'#0d3b3b'} as React.CSSProperties}><Pic name="destinations/Andaman" alt="Andaman" /><span><small>Island</small>Andaman</span></div>
<div className="d reveal" style={{'--d':'.2s','--a':'#b85a7a','--b':'#2a2050'} as React.CSSProperties}><Pic name="destinations/Sikkim" alt="Sikkim" /><span><small>Mountain</small>Sikkim</span></div>
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
<Link href="/blogs/bali-beyond-the-beaches" className="blog glass reveal"><div className="img" data-n="Bali" style={{'--a':'#0e9196','--b':'#0b3b4d'} as React.CSSProperties}><Pic name="blogs/Cordelia Cruise" alt="" /></div><div className="t"><small>Guide</small><h3>Cruises that you can't miss</h3><p>Explore the top cruise packages with us</p></div></Link>
<Link href="/blogs/japan-in-autumn" className="blog glass reveal" style={{'--d':'.1s'} as React.CSSProperties}><div className="img" data-n="Japan" style={{'--a':'#d8584a','--b':'#3a2a4a'} as React.CSSProperties}><Pic name="blogs/Mount Fuji" alt="" /></div><div className="t"><small>Season</small><h3>Japan in autumn</h3><p>When and where to catch the best foliage.</p></div></Link>
<Link href="/blogs/planning-an-egypt-cruise" className="blog glass reveal" style={{'--d':'.2s'} as React.CSSProperties}><div className="img" data-n="Nile" style={{'--a':'#e0a800','--b':'#3b5a4a'} as React.CSSProperties}><Pic name="blogs/Villas in Maldives" alt="" /></div><div className="t"><small>Tips</small><h3>Planning an Maldives Trip</h3><p>What to know before chilling in the sea.</p></div></Link>
</div></div></section>

<div className="partners"><p>Trusted by the world’s best</p>{logos.length ? <div className="track logos">{loop(logos).map((l,i)=><img key={i} src={l.src} alt={l.name} className={l.orig?'orig':''} loading="lazy" />)}</div> : <div className="track">{[...N,...N].map((n,i)=><span key={i}>{n}</span>)}</div>}</div>

<section><div className="wrap">
<div className="head reveal"><div><span className="eyebrow">Testimonials</span><h2>Here’s what our <em>travellers</em> say</h2></div></div>
<div className="tw">
<div className="t glass reveal"><div className="st">★★★★★</div><p className="q">“A big thank you to Bents and Manab Basu! Your love and encouragement always make everything brighter. Grateful to have you both.”</p><div className="who"><i>{find('testimonials/ananya-sen') ? <Pic name="testimonials/ananya-sen" alt="Ananya Sen" /> : 'AS'}</i><div>Swarup Sau</div></div></div>
<div className="t glass reveal" style={{'--d':'.1s'} as React.CSSProperties}><div className="st">★★★★★</div><p className="q">“Superb experience with the Bents team—smooth, leisurely, luxurious, and exceptionally well-planned. Everything was thoughtfully managed, making the entire experience truly memorable.”</p><div className="who"><i>{find('testimonials/rohan-mehta') ? <Pic name="testimonials/rohan-mehta" alt="Rohan Mehta" /> : 'RM'}</i><div>Gourav Jamwal</div></div></div>
<div className="t glass reveal" style={{'--d':'.2s'} as React.CSSProperties}><div className="st">★★★★★</div><p className="q">“Me and my family travelled to Kashmir and Ladakh under services by Bents and their network associates in July 2026. The whole trip was planned and supported with all committed services so nicely. We are grateful to Bents, in specific to Ms. Pinki Sharma for her extraordinary helps. We would like to travel with Bents again.”</p><div className="who"><i>{find('testimonials/priya-das') ? <Pic name="testimonials/priya-das" alt="Priya Das" /> : 'PD'}</i><div>Raj Kumar Mukherjee</div></div></div>
</div></div></section>

<section className="contact" id="contact" style={{'paddingTop':'0'} as React.CSSProperties}><div className="wrap"><div className="box glass reveal">
<div><span className="eyebrow">Get in touch</span><h2>Let’s plan your <em>escape</em></h2>
<div className="info"><div><b>Call us</b>+91-9830032368</div><div><b>Email</b>bentsholidays@gmail.com</div><div><b>Office</b>22 Lake Place, Kolkata, India</div></div></div>
<form onSubmit={enq.onSubmit}>
<input name="name" className="in" placeholder="Your name" required /><input name="email" className="in" type="email" placeholder="Email address" required /><textarea name="message" className="in" placeholder="Tell us about your dream trip" maxLength={1000}></textarea>
<button className="btn pri" style={{'justifySelf':'start'} as React.CSSProperties}>{sent?'Thank you — we’ll be in touch ✓':'Send enquiry'}</button>{enq.err && <p className="ferr full">{enq.err}</p>}</form>
</div></div></section>

</>)
}
