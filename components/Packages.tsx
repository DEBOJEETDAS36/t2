'use client'
import type React from 'react'
import Link from 'next/link'
import { TOURS } from '@/data/tours'
import Pic from './Pic'
const F = [['bali-nusa-penida', 'asia', 'Vietnam'], ['dubai-abu-dhabi', 'mid', 'UAE'], ['blissful-japan', 'asia', 'Japan'], ['vietnam-unfolded', 'asia', 'Vietnam'], ['jewel-of-the-nile', 'asia', 'Sri Lanka'], ['scenic-new-zealand', 'oce', 'N. Zealand'],
  ['korea', 'asia', 'Korea'], ['georgia', 'asia', 'Georgia'], ['armenia', 'asia', 'Armenia'], ['bali', 'asia', 'Indonesia'], ['philippines', 'asia', 'Philippines'], ['egypt', 'mid', 'Egypt'], ['australia', 'oce', 'Australia'], ['singapore', 'asia', 'Singapore'], ['malaysia', 'asia', 'Malaysia'], ['russia', 'asia', 'Russia']]
export default function Packages() {
  return (
    <section id="packages"><div className="wrap">
      <div className="head reveal"><div><span className="eyebrow">Our top packages</span><h2>Journeys worth <em>leaving</em> for</h2></div></div>
      <div className="cards">
        {F.map((d, i) => { const t = TOURS[d[0]]; return (
          <Link key={d[0]} href={`/leisure/${t.slug}`} className={'card reveal' + (i === 5 ? ' wide' : '')} style={{ '--a': t.a, '--b': t.b } as React.CSSProperties}>
            <Pic name={`tours/${t.slug}`} alt={d[2]} />
            <span>{d[2]}</span>
          </Link>) })}
      </div></div></section>
  )
}
