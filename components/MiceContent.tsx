'use client'
import type React from 'react'
import { useState } from 'react'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { useEnquiry } from '@/lib/useEnquiry'
const N = ['Tata Group','Infosys','Mahindra','HDFC','Asian Paints','Wipro','ITC','Reliance']
export default function MiceContent() {
  useSiteEffects()
  const enq = useEnquiry('mice')
  const sent = enq.sent
  return (<div className="mice">

<header className="hero"><div className="orb o1"></div><div className="orb o2"></div>
<div className="wrap">
<span className="pill glass reveal"><b></b>Corporate travel &amp; events</span>
<h1 className="reveal" style={{'--d':'.1s'} as React.CSSProperties}>Events that move <em>people</em>, and businesses.</h1>
<p className="reveal" style={{'--d':'.2s'} as React.CSSProperties}>From boardroom retreats to global incentive trips — we design, manage and deliver seamless corporate experiences anywhere in the world.</p>
<div className="cta reveal" style={{'--d':'.3s'} as React.CSSProperties}><a href="#rfp" className="btn pri">Request a proposal →</a><a href="#services" className="btn gh">What we offer</a></div>
<div className="acr reveal" style={{'--d':'.4s'} as React.CSSProperties}><div className="glass"><b>M</b>Meetings</div><div className="glass"><b>I</b>Incentives</div><div className="glass"><b>C</b>Conferences</div><div className="glass"><b>E</b>Exhibitions</div></div>
</div></header>

<div className="wrap"><div className="stats reveal">
<div><b data-c="500">0</b><small>EVENTS DELIVERED</small></div>
<div><b data-c="60">0</b><small>CORPORATE CLIENTS</small></div>
<div><b data-c="35">0</b><small>COUNTRIES</small></div>
<div><b data-c="10000">0</b><small>MAX DELEGATES</small></div>
</div></div>

<section id="services"><div className="wrap">
<div className="head reveal"><div><span className="eyebrow">What we do</span><h2>Four ways we make your <em>event</em> work</h2></div><p className="sub">One accountable team across planning, travel, venues and on-ground delivery.</p></div>
<div className="pil">
<div className="pc glass reveal" data-l="M"><h3>Meetings</h3><p>Focused offsites and board retreats in inspiring, distraction-free settings.</p><ul><li>Boardroom &amp; offsite retreats</li><li>Leadership summits</li><li>Team-building programmes</li></ul><a href="#rfp">Plan a meeting →</a></div>
<div className="pc glass reveal" style={{'--d':'.1s'} as React.CSSProperties} data-l="I"><h3>Incentives</h3><p>Reward-driven travel that motivates teams and strengthens loyalty.</p><ul><li>Dealer &amp; sales incentive trips</li><li>Curated luxury experiences</li><li>Gala dinners &amp; awards nights</li></ul><a href="#rfp">Design an incentive →</a></div>
<div className="pc glass reveal" data-l="C"><h3>Conferences</h3><p>Large-format conferences with full logistics, staging and delegate management.</p><ul><li>Venue sourcing &amp; AV production</li><li>Registration &amp; delegate travel</li><li>Hybrid &amp; live-streamed formats</li></ul><a href="#rfp">Host a conference →</a></div>
<div className="pc glass reveal" style={{'--d':'.1s'} as React.CSSProperties} data-l="E"><h3>Exhibitions</h3><p>Trade shows and brand activations, from stand design to on-site support.</p><ul><li>Stand design &amp; fabrication</li><li>Group travel to global expos</li><li>Launch &amp; roadshow events</li></ul><a href="#rfp">Plan an exhibition →</a></div>
</div></div></section>

<section className="alt"><div className="wrap">
<div className="head reveal"><div><span className="eyebrow">How it works</span><h2>From brief to <em>standing ovation</em></h2></div></div>
<div className="steps">
<div className="st reveal"><i>01</i><h3>Brief</h3><p>We learn your goals, audience and budget.</p></div>
<div className="st reveal" style={{'--d':'.1s'} as React.CSSProperties}><i>02</i><h3>Concept</h3><p>Destination, venue and programme proposals.</p></div>
<div className="st reveal" style={{'--d':'.2s'} as React.CSSProperties}><i>03</i><h3>Plan</h3><p>Contracts, travel, logistics and run sheets.</p></div>
<div className="st reveal" style={{'--d':'.3s'} as React.CSSProperties}><i>04</i><h3>Deliver</h3><p>Our team on the ground, start to finish.</p></div>
<div className="st reveal" style={{'--d':'.4s'} as React.CSSProperties}><i>05</i><h3>Review</h3><p>Reporting, feedback and ROI insights.</p></div>
</div></div></section>

<section><div className="wrap">
<div className="head reveal"><div><span className="eyebrow">Featured destinations</span><h2>Venues with <em>presence</em></h2></div><p className="sub">Hand-picked destinations proven for groups from 20 to 2,000.</p></div>
<div className="ven">
<div className="v glass reveal"><div className="img" data-n="Dubai" style={{'--a':'#e0a800','--b':'#0e6a73'} as React.CSSProperties}><span className="tag">Conferences</span></div><div className="vb"><h3>Dubai</h3><p>World-class convention centres, desert galas and effortless connectivity.</p><div className="meta"><span><b>2,000</b> pax</span><span><b>4–6</b> days</span></div></div></div>
<div className="v glass reveal" style={{'--d':'.1s'} as React.CSSProperties}><div className="img" data-n="Bali" style={{'--a':'#0e9196','--b':'#064a52'} as React.CSSProperties}><span className="tag">Incentives</span></div><div className="vb"><h3>Bali</h3><p>Cliffside resorts and private-villa programmes that feel like a reward.</p><div className="meta"><span><b>300</b> pax</span><span><b>4–5</b> days</span></div></div></div>
<div className="v glass reveal" style={{'--d':'.2s'} as React.CSSProperties}><div className="img" data-n="Singapore" style={{'--a':'#4a7fb5','--b':'#1a2a52'} as React.CSSProperties}><span className="tag">Exhibitions</span></div><div className="vb"><h3>Singapore</h3><p>Asia’s hub for trade shows, product launches and regional summits.</p><div className="meta"><span><b>1,500</b> pax</span><span><b>3–5</b> days</span></div></div></div>
<div className="v glass reveal"><div className="img" data-n="Goa" style={{'--a':'#14a37f','--b':'#0b3d56'} as React.CSSProperties}><span className="tag">Meetings</span></div><div className="vb"><h3>Goa</h3><p>Beachside offsites and leadership retreats close to home.</p><div className="meta"><span><b>400</b> pax</span><span><b>2–4</b> days</span></div></div></div>
<div className="v glass reveal" style={{'--d':'.1s'} as React.CSSProperties}><div className="img" data-n="Thailand" style={{'--a':'#b85a7a','--b':'#2a2050'} as React.CSSProperties}><span className="tag">Incentives</span></div><div className="vb"><h3>Thailand</h3><p>Island hopping, gala nights and great value for large groups.</p><div className="meta"><span><b>800</b> pax</span><span><b>4–6</b> days</span></div></div></div>
<div className="v glass reveal" style={{'--d':'.2s'} as React.CSSProperties}><div className="img" data-n="Switzerland" style={{'--a':'#3b8f6a','--b':'#0d2f4d'} as React.CSSProperties}><span className="tag">Meetings</span></div><div className="vb"><h3>Switzerland</h3><p>Alpine boardroom retreats for executive-level programmes.</p><div className="meta"><span><b>150</b> pax</span><span><b>3–5</b> days</span></div></div></div>
</div></div></section>

<section className="alt"><div className="wrap">
<div className="head reveal"><div><span className="eyebrow">Capabilities</span><h2>Everything <em>handled</em></h2></div></div>
<div className="sv">
<div className="s glass reveal"><i>✈</i><h3>Group air &amp; transfers</h3><p>Negotiated fares, manifests and seamless ground logistics.</p></div>
<div className="s glass reveal" style={{'--d':'.1s'} as React.CSSProperties}><i>◈</i><h3>Venues &amp; hotels</h3><p>Contracted inventory and best-rate negotiation worldwide.</p></div>
<div className="s glass reveal" style={{'--d':'.2s'} as React.CSSProperties}><i>✦</i><h3>Production &amp; AV</h3><p>Staging, lighting, content and hybrid broadcast.</p></div>
<div className="s glass reveal"><i>☰</i><h3>Registration &amp; apps</h3><p>Delegate portals, agendas and live event apps.</p></div>
<div className="s glass reveal" style={{'--d':'.1s'} as React.CSSProperties}><i>❖</i><h3>Gala &amp; entertainment</h3><p>Themed dinners, artists and signature moments.</p></div>
<div className="s glass reveal" style={{'--d':'.2s'} as React.CSSProperties}><i>☾</i><h3>On-ground team</h3><p>Dedicated managers and 24/7 support throughout.</p></div>
</div></div></section>

<div className="partners"><p>Trusted by leading companies</p><div className="track">{[...N,...N].map((n,i)=><span key={i}>{n}</span>)}</div></div>

<section><div className="wrap"><div className="qt glass reveal"><p>“They ran our 600-person dealer conference across three cities without a single hiccup. Our team simply enjoyed it.”</p><small>— Head of Sales, Automotive Group</small></div></div></section>

<section id="rfp" style={{'paddingTop':'0'} as React.CSSProperties}><div className="wrap"><div className="box glass reveal">
<div><span className="eyebrow">Request a proposal</span><h2>Tell us about your <em>event</em></h2>
<div className="info"><div><b>MICE desk</b>+91-XXXXXXXXXX</div><div><b>Email</b>mice@wanderline.com</div><div><b>Response time</b>Within 24 working hours</div></div></div>
<form onSubmit={enq.onSubmit}>
<input name="name" className="in" placeholder="Full name" required /><input name="company" className="in" placeholder="Company" required />
<input name="email" className="in" type="email" placeholder="Work email" required /><input name="phone" className="in" placeholder="Phone" />
<select name="eventType" className="in"><option>Event type</option><option>Meeting</option><option>Incentive</option><option>Conference</option><option>Exhibition</option></select>
<select name="groupSize" className="in"><option>Group size</option><option>20–50</option><option>50–200</option><option>200–1,000</option><option>1,000+</option></select>
<textarea name="message" className="in full" placeholder="Destination, dates and anything else we should know"></textarea>
<button className="btn pri full" style={{'justifySelf':'start'} as React.CSSProperties}>{sent?'Thank you — we’ll be in touch ✓':'Send request'}</button>{enq.err && <p className="ferr full">{enq.err}</p>}</form>
</div></div></section>

</div>)
}
