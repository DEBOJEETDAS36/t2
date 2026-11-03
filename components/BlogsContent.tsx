'use client'
import type React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { useEnquiry } from '@/lib/useEnquiry'
import { BLOGS } from '@/data/blogs'
const CATS = ['All', 'Guides', 'Seasons', 'Tips', 'MICE']
const POSTS = BLOGS.map(b => [b.cat, b.key, b.title, b.excerpt, b.date, String(b.read), b.a, b.b, b.slug])
export default function BlogsContent() {
  useSiteEffects()
  const enq = useEnquiry('newsletter',{ alert: true })
  const sent = enq.sent
  const [cur, setCur] = useState('All')
  return (<div className="pg">
<header className="ph"><div className="orb o1"></div><div className="orb o2"></div><div className="wrap">
<span className="crumb glass reveal">Home <b>/</b> Blogs</span>
<h1 className="reveal" style={{'--d':'.1s'} as React.CSSProperties}>Stories &amp; <em>inspiration</em> for the curious traveller.</h1>
<p className="reveal" style={{'--d':'.2s'} as React.CSSProperties}>Destination guides, seasonal tips and behind-the-scenes notes from our team.</p></div></header>
<section style={{'paddingTop':'20px'} as React.CSSProperties}><div className="wrap">
<Link href="/blogs/bali-beyond-the-beaches" className="feat glass reveal"><div className="img" style={{'--a':'#0e9196','--b':'#064a52'} as React.CSSProperties}><div className="pimg" data-l="Featured image · 1200×800"></div></div><div className="fb"><div className="mt"><b>Featured · Guide</b><span>12 Oct 2026</span><span>8 min read</span></div><h2>Bali beyond the beaches: quiet temples &amp; rice terraces</h2><p>Skip the crowds with our designers’ favourite corners of the island — and how to string them into a perfect week.</p><span className="rd">Read article →</span></div></Link>
<div className="chips reveal">{CATS.map(c=><button key={c} className={c===cur?'on':''} onClick={()=>setCur(c)}>{c}</button>)}</div><div className="g3">{POSTS.filter(p=>cur==='All'||p[0]===cur).map((p,i)=><Link key={p[2]} href={`/blogs/${p[8]}`} className="post glass" style={{animationDelay:`${i*.06}s`}}><div className="img" style={{'--a':p[6],'--b':p[7]} as React.CSSProperties}><div className="pimg" data-l="Cover image · 800×500" /></div><div className="pt"><div className="mt"><b>{p[0]}</b><span>{p[4]}</span></div><h3>{p[2]}</h3><p>{p[3]}</p><span className="rd">Read more →</span></div></Link>)}</div>
<div className="nl glass reveal" style={{'marginTop':'80px'} as React.CSSProperties}><div><span className="eyebrow">Newsletter</span><h2>Get inspiration in your <em>inbox</em></h2><p className="sub">One thoughtful email a month. No spam, ever.</p></div>
<form className="nf glass" onSubmit={enq.onSubmit}>{sent?<span style={{padding:'12px 18px'}}>Thank you — you’re subscribed ✓</span>:<><input name="email" className="in" type="email" placeholder="Your email address" required /><button className="btn pri">Subscribe</button></>}</form></div></div></section>
</div>)
}
