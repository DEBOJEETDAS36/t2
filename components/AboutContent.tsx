'use client'
import type React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSiteEffects } from '@/lib/useSiteEffects'
import Timeline from './Timeline'
const VALS = [['✦', 'Craft over volume', 'Every itinerary is designed by hand, never copy-pasted.'], ['◈', 'Radical honesty', 'Clear pricing, clear trade-offs, no surprises on the trip.'], ['☾', 'Always on call', 'A real person reachable 24/7 wherever you are.'], ['❖', 'Travel with care', 'Local partners, fair wages and low-impact choices.']]
const TEAM = [['Arjun Sen', 'Founder & CEO', '#0e9196', '#064a52'], ['Meera Das', 'Head of Design', '#e0a800', '#0e6a73'], ['Rahul Basu', 'MICE Director', '#4a7fb5', '#1a2a52'], ['Sneha Roy', 'Guest Experience', '#b85a7a', '#2a2050']]
export default function AboutContent() {
  useSiteEffects()
  
  return (<div className="pg">
<header className="ph"><div className="orb o1"></div><div className="orb o2"></div><div className="wrap">
<span className="crumb glass reveal">Home <b>/</b> About us</span>
<h1 className="reveal" style={{'--d':'.1s'} as React.CSSProperties}>We design journeys, <em>not</em> itineraries.</h1>
<p className="reveal" style={{'--d':'.2s'} as React.CSSProperties}>A small team of travel designers obsessed with the details you’ll remember — and the ones you’ll never have to think about.</p></div></header>
<section style={{'paddingTop':'20px'} as React.CSSProperties}><div className="wrap sp">
<div className="art reveal"><div className="pimg" data-l="Story image · 900×1100"></div></div>
<div className="reveal" style={{'--d':'.15s'} as React.CSSProperties}><span className="eyebrow">Our story</span><h2>Born from a love of <em>going</em></h2>
<p style={{'marginTop':'22px'} as React.CSSProperties}>Wanderline began in 2011 with one belief: great travel is built on trust, craft and care. What started as a two-person desk in Howrah has grown into a team serving thousands of travellers and corporate clients across 35 countries.</p>
<p>We still plan every trip the same way — by listening first. Your pace, your people, your idea of a perfect day. Then we handle everything else.</p>
<Link href="/contact" className="btn pri" style={{'marginTop':'30px'} as React.CSSProperties}>Talk to a designer →</Link></div></div>
<div className="wrap"><div className="stats reveal" style={{'marginTop':'80px'} as React.CSSProperties}>
<div><b data-c="15">0</b><small>YEARS OF EXPERIENCE</small></div><div><b data-c="25000">0</b><small>HAPPY TRAVELLERS</small></div><div><b data-c="120">0</b><small>DESTINATIONS</small></div><div><b data-c="98">0</b><small>% REPEAT CLIENTS</small></div></div></div></section>
<section style={{'padding':'20px 0 90px'} as React.CSSProperties}><div className="wrap"><div className="gal reveal"><div className="pimg" data-l="Our travellers · 800×1000"></div><div className="pimg" data-l="On the road · 1400×1000"></div><div className="pimg" data-l="Our office · 800×1000"></div></div></div></section>
<section className="alt"><div className="wrap"><div className="head reveal"><div><span className="eyebrow">What we believe</span><h2>Our <em>values</em></h2></div></div><div className="g4">{VALS.map((v,i)=><div key={v[1]} className="val glass reveal" style={{'--d':`${i*.1}s`} as React.CSSProperties}><i>{v[0]}</i><h3>{v[1]}</h3><p>{v[2]}</p></div>)}</div></div></section>
<section><div className="wrap"><div className="head reveal" style={{'justifyContent':'center','textAlign':'center'} as React.CSSProperties}><div><span className="eyebrow">Milestones</span><h2>Our <em>journey</em> so far</h2></div></div><Timeline /></div></section>
<section className="alt"><div className="wrap"><div className="head reveal"><div><span className="eyebrow">The team</span><h2>People behind the <em>plans</em></h2></div><p className="sub">Specialists who’ve actually been where you’re going.</p></div><div className="g4">{TEAM.map((p,i)=><div key={p[0]} className="tm glass reveal" style={{'--d':`${i*.1}s`} as React.CSSProperties}><div className="av" style={{'--a':p[2],'--b':p[3]} as React.CSSProperties}><div className="pimg" data-l="Team photo · 600×750" /></div><h3>{p[0]}</h3><small>{p[1]}</small></div>)}</div></div></section>
<section><div className="wrap"><div className="cta glass reveal"><span className="eyebrow">Ready when you are</span><h2>Let’s plan something <em>unforgettable</em></h2><p className="sub">Tell us where you’d love to go — we’ll take it from there.</p><Link href="/contact" className="btn pri">Start planning →</Link></div></div></section>
</div>)
}
