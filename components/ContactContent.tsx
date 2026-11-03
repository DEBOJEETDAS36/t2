'use client'
import type React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { useEnquiry } from '@/lib/useEnquiry'
const FAQ = [['How far in advance should I book?', 'For peak seasons we recommend 3–4 months ahead; last-minute trips are possible and we’ll always tell you honestly what’s available.'], ['Can you customise a package?', 'Yes. Every package is a starting point — we adjust hotels, pace, activities and budget to suit you.'], ['Do you handle visas and insurance?', 'We guide you through visas and arrange comprehensive travel insurance for every itinerary.'], ['What support do I get during the trip?', 'A dedicated manager and our 24/7 helpline for the entire duration of your journey.']]
export default function ContactContent() {
  useSiteEffects()
  const enq = useEnquiry('contact')
  const sent = enq.sent
  const [open, setOpen] = useState<number | null>(null)
  return (<div className="pg">
<header className="ph"><div className="orb o1"></div><div className="orb o2"></div><div className="wrap">
<span className="crumb glass reveal">Home <b>/</b> Contact</span>
<h1 className="reveal" style={{'--d':'.1s'} as React.CSSProperties}>Let’s plan your <em>escape</em>.</h1>
<p className="reveal" style={{'--d':'.2s'} as React.CSSProperties}>Share a few details and a travel designer will reply within one working day.</p></div></header>
<section style={{'paddingTop':'20px'} as React.CSSProperties}><div className="wrap cg">
<form className="cf glass reveal" onSubmit={enq.onSubmit}><div className="full"><h2>Send an enquiry</h2></div>
<input name="name" className="in" placeholder="Full name" required /><input name="email" className="in" type="email" placeholder="Email address" required />
<input name="phone" className="in" placeholder="Phone number" /><select name="interest" className="in"><option>I’m interested in</option><option>Leisure holiday</option><option>MICE / corporate</option><option>Something else</option></select>
<input name="destination" className="in" placeholder="Destination" /><input name="dates" className="in" placeholder="Travel dates" />
<textarea name="message" className="in full" placeholder="Tell us about your dream trip" maxLength={1000}></textarea>
<button className="btn pri full" style={{'justifySelf':'start'} as React.CSSProperties}>{sent?'Thank you — we’ll be in touch ✓':'Send enquiry'}</button>{enq.err && <p className="ferr full">{enq.err}</p>}</form>
<div className="ci reveal" style={{'--d':'.15s'} as React.CSSProperties}>
<div className="c glass"><i>✆</i><div><small>Call us</small><b>+91-XXXXXXXXXX</b></div></div>
<div className="c glass"><i>✉</i><div><small>Email</small><b>hello@wanderline.com</b></div></div>
<div className="c glass"><i>◷</i><div><small>Hours</small><b>Mon–Sat · 10am – 7pm IST</b></div></div>
<div className="pimg" style={{'height':'170px'} as React.CSSProperties} data-l="Office photo · 800×400"></div>
<div className="mp"><svg viewBox="0 0 400 230"><g fill="none" stroke="var(--teal)" strokeOpacity=".3"><path d="M0 60 Q120 90 200 70 T400 100"/><path d="M0 150 Q100 120 220 150 T400 140"/><path d="M130 0 Q150 110 120 230"/><path d="M270 0 Q250 100 290 230"/></g><circle className="dot" cx="210" cy="112" r="6"/><circle className="ring" cx="210" cy="112" r="6"/><text x="226" y="108" fontSize="12" fill="var(--fg)" fontFamily="Manrope">Wanderline HQ</text><text x="226" y="124" fontSize="10" fill="var(--mute)" fontFamily="Manrope">Howrah, West Bengal</text></svg></div>
</div></div></section>
<section className="alt"><div className="wrap"><div className="head reveal" style={{'justifyContent':'center','textAlign':'center'} as React.CSSProperties}><div><span className="eyebrow">FAQ</span><h2>Good to <em>know</em></h2></div></div><div className="faq">{FAQ.map((f,i)=><div key={f[0]} className={'q glass reveal'+(open===i?' open':'')} style={{'--d':`${i*.06}s`} as React.CSSProperties}><button onClick={()=>setOpen(open===i?null:i)}>{f[0]}<span>+</span></button><div className="qa"><div><p>{f[1]}</p></div></div></div>)}</div></div></section>
</div>)
}
