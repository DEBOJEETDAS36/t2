'use client'
import type React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { TOURS } from '@/data/tours'
import Pic from './Pic'
const TABS = [['all', 'All'], ['asia', 'Asia'], ['mid', 'Middle East'], ['oce', 'Pacific']]
const F = [['bali-nusa-penida', 'asia', 'Bali'], ['dubai-abu-dhabi', 'mid', 'Dubai'], ['blissful-japan', 'asia', 'Japan'], ['vietnam-unfolded', 'asia', 'Vietnam'], ['jewel-of-the-nile', 'asia', 'Sri Lanka'], ['scenic-new-zealand', 'oce', 'N. Zealand'],
  ['korea', 'asia', 'Korea'], ['georgia', 'asia', 'Georgia'], ['armenia', 'asia', 'Armenia'], ['bali', 'asia', 'Bali'], ['philippines', 'asia', 'Philippines'], ['egypt', 'mid', 'Egypt'], ['australia', 'oce', 'Australia'], ['singapore', 'asia', 'Singapore'], ['malaysia', 'asia', 'Malaysia'], ['russia', 'asia', 'Russia']]
export default function Packages() {
  const [f, setF] = useState('all')
  return (
    <section id="packages"><div className="wrap">
      <div className="head reveal"><div><span className="eyebrow">Our top packages</span><h2>Journeys worth <em>leaving</em> for</h2></div>
        <div className="tabs glass">{TABS.map(([k, n]) => <button key={k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>{n}</button>)}</div></div>
      <div className={'cards' + (f === 'all' ? '' : ' flat')}>
        {F.filter(d => f === 'all' || d[1] === f).map((d, i) => { const t = TOURS[d[0]]; return (
          <Link key={d[0]} href={`/leisure/${t.slug}`} className={'card reveal' + (i === 5 ? ' wide' : '')} style={{ '--a': t.a, '--b': t.b } as React.CSSProperties}>
            <Pic name={`tours/${t.slug}`} alt={d[2]} />
            <span>{d[2]}</span>
          </Link>) })}
      </div></div></section>
  )
}
