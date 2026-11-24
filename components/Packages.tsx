'use client'
import type React from 'react'
import { TOURS } from '@/data/tours'
import Pic from './Pic'
const F = [['bali-nusa-penida', 'asia', 'Vietnam'], ['dubai-abu-dhabi', 'mid', 'UAE'], ['blissful-japan', 'asia', 'Japan'], ['vietnam-unfolded', 'asia', 'Thailand'], ['jewel-of-the-nile', 'asia', 'Sri Lanka'], ['scenic-new-zealand', 'oce', 'N. Zealand', 'new-zealand'],
  ['korea', 'asia', 'South Korea'], ['georgia', 'asia', 'Georgia'], ['armenia', 'asia', 'Armenia'], ['bali', 'asia', 'Indonesia'], ['philippines', 'asia', 'Philippines'], ['egypt', 'mid', 'Egypt'], ['australia', 'oce', 'Australia'], ['singapore', 'asia', 'Singapore'], ['malaysia', 'asia', 'Malaysia'], ['russia', 'asia', 'Russia']]
export default function Packages() {
  return (
    <section id="packages"><div className="wrap">
      <div className="head reveal"><div><span className="eyebrow">Our top packages</span><h2>Journeys worth <em>leaving</em> for</h2></div></div>
      <div className="cards">
        {F.map((d, i) => { const t = TOURS[d[0]]; return (
          <div key={d[0]} className={'card reveal' + (i === 5 ? ' wide' : '')} style={{ '--a': t.a, '--b': t.b } as React.CSSProperties}>
            <Pic name={`tours/${d[3] ?? t.slug}`} alt={d[2]} />
            <span>{d[2]}</span>
          </div>) })}
      </div></div></section>
  )
}
