'use client'
import type React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { BLOGS, type Blog } from '@/data/blogs'
export default function BlogPost({ post: p }: { post: Blog }) {
  useSiteEffects()
  const [prog, setProg] = useState(0)
  const [on, setOn] = useState(0)
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    document.body.dataset.cl = 'Read'
    const f = () => {
      const h = document.documentElement
      setProg(Math.min(1, scrollY / Math.max(1, h.scrollHeight - innerHeight)))
      let k = 0
      p.sections.forEach((_, i) => { const e = document.getElementById('s' + i); if (e && e.getBoundingClientRect().top < 160) k = i })
      setOn(k)
    }
    f(); addEventListener('scroll', f, { passive: true })
    return () => { delete document.body.dataset.cl; removeEventListener('scroll', f) }
  }, [p])
  const i = BLOGS.findIndex(x => x.slug === p.slug)
  const prev = BLOGS[(i + BLOGS.length - 1) % BLOGS.length], next = BLOGS[(i + 1) % BLOGS.length]
  const rel = BLOGS.filter(x => x.slug !== p.slug).slice(0, 3)
  const d = (s: string) => ({ '--d': s }) as React.CSSProperties
  const copy = () => { navigator.clipboard?.writeText(location.href); setCopied(true); setTimeout(() => setCopied(false), 1800) }
  const open = (u: string) => window.open(u + encodeURIComponent(p.title + ' ' + location.href), '_blank', 'noopener')
  return (
    <div className="pg">
      <div className="rpb" style={{ transform: `scaleX(${prog})` }} />
      <header className="ph"><div className="orb o1" /><div className="orb o2" /><div className="wrap">
        <span className="crumb glass reveal"><Link href="/">Home</Link> <b>/</b> <Link href="/blogs">Blogs</Link> <b>/</b> {p.cat}</span>
        <h1 className="reveal" style={d('.1s')}>{p.title}</h1>
        <p className="reveal" style={d('.2s')}>{p.excerpt}</p>
        <div className="meta2 reveal" style={d('.3s')}>
          <div className="au"><div className="pimg" data-l="" /><div><b>{p.author[0]}</b><small>{p.author[1]}</small></div></div>
          <span>{p.date}</span><span>{p.read} min read</span><span className="lbl" style={{ position: 'static' }}>{p.cat}</span>
        </div>
        <div className="pimg bhero reveal" style={d('.3s')} data-l="Cover image · 1600×800" />
      </div></header>
      <div className="bl">
        <article className="art2">
          <p className="lead2">{p.intro}</p>
          {p.sections.map((s, k) => (
            <div key={k} id={'s' + k}><h2>{s.h}</h2>
              {s.p.map((t, j) => <p key={j}>{t}</p>)}
              {s.img && <figure className="figu"><div className="pimg" data-l={s.img[0]} /><figcaption>{s.img[1]}</figcaption></figure>}
              {s.quote && <blockquote className="quo">{s.quote}</blockquote>}
              {s.list && <ul className="tipl">{s.list.map(x => <li key={x}>{x}</li>)}</ul>}
              {s.gallery && <div className="gal2"><div className="pimg" data-l="Gallery image · 800×600" /><div className="pimg" data-l="Gallery image · 800×600" /></div>}
            </div>
          ))}
          <div className="tgs">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
          <div className="abx glass"><div className="pimg" data-l="" /><div><small>Written by</small><h3>{p.author[0]}</h3><p>{p.author[1]} at Wanderline. This is a sample author bio — add a short line about who they are and where they’ve travelled.</p></div></div>
        </article>
        <aside className="side">
          <div className="toc glass"><small>In this article</small>{p.sections.map((s, k) => <a key={k} href={'#s' + k} className={on === k ? 'on' : ''}>{s.h}</a>)}
            <div className="shr"><button onClick={copy}>{copied ? 'Copied ✓' : 'Copy link'}</button><button onClick={() => open('https://wa.me/?text=')}>WhatsApp</button><button onClick={() => open('https://twitter.com/intent/tweet?text=')}>X</button></div></div>
          <div className="cta2 glass"><h3>Plan a trip like this</h3><p>Our designers will turn it into a tailor-made itinerary.</p><Link href="/contact" className="btn pri">Talk to a designer</Link></div>
        </aside>
      </div>
      <div className="pn"><Link href={`/blogs/${prev.slug}`} className="glass"><small>← Previous</small><h3>{prev.title}</h3></Link><Link href={`/blogs/${next.slug}`} className="glass"><small>Next →</small><h3>{next.title}</h3></Link></div>
      <section className="alt"><div className="wrap"><div className="head reveal"><div><span className="eyebrow">Keep reading</span><h2>More <em>stories</em></h2></div><Link href="/blogs" className="btn gh">All articles</Link></div>
        <div className="g3">{rel.map((x, k) => (
          <Link key={x.slug} href={`/blogs/${x.slug}`} className="post glass reveal" style={d(`${k * 0.08}s`)}><div className="img" style={{ '--a': x.a, '--b': x.b } as React.CSSProperties}><div className="pimg" data-l="Cover image · 800×500" /></div>
            <div className="pt"><div className="mt"><b>{x.cat}</b><span>{x.date}</span></div><h3>{x.title}</h3><p>{x.excerpt}</p><span className="rd">Read more →</span></div></Link>))}</div></div></section>
    </div>
  )
}
