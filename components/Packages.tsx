'use client'
import { useState } from 'react'
import Link from 'next/link'
import { TOURS } from '@/data/tours'
import Pic from './Pic'
const TABS = [['all', 'All'], ['asia', 'Asia'], ['mid', 'Middle East'], ['oce', 'Pacific']]
const F = [['bali-nusa-penida', 'asia', 'Bali'], ['dubai-abu-dhabi', 'mid', 'Dubai'], ['blissful-japan', 'asia', 'Japan'], ['vietnam-unfolded', 'asia', 'Vietnam'], ['jewel-of-the-nile', 'mid', 'Egypt'], ['scenic-new-zealand', 'oce', 'N. Zealand']]
export default function Packages() {
  const [f, setF] = useState('all')
  return (
    <section id="packages"><div className="wrap">
      <div className="head reveal"><div><span className="eyebrow">Our top packages</span><h2>Journeys worth <em>leaving</em> for</h2></div>
        <div className="tabs glass">{TABS.map(([k, n]) => <button key={k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>{n}</button>)}</div></div>
      <div className="cards">
        {F.filter(d => f === 'all' || d[1] === f).map(d => { const t = TOURS[d[0]]; const n = t.days.length; return (
          <article key={d[0]} className="card glass reveal" data-vis="">
            <div className="img" data-n={d[2]} style={{ '--a': t.a, '--b': t.b } as React.CSSProperties}><Pic name={`tours/${t.slug}`} alt={t.name} /><span className="tag">{n - 1}N / {n}D</span></div>
            <div className="body"><h3>{t.name}</h3><p>{t.desc}</p><div className="foot"><Link href={`/leisure/${t.slug}`}>Explore →</Link></div></div>
          </article>) })}
      </div></div></section>
  )
}
