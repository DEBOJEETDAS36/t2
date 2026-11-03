'use client'
import { useEffect, useRef } from 'react'
const T = [['2011', 'The first desk', 'Two founders, one phone and a handful of Bali itineraries.'], ['2015', 'Going international', 'Our first group departures to Europe and the Middle East.'], ['2019', 'MICE division', 'Corporate meetings, incentives and conferences launched.'], ['2023', '25,000 travellers', 'A milestone built almost entirely on repeat and referral.'], ['2026', 'Wanderline today', '120+ destinations and a team of 40 across three cities.']]
export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const fill = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const up = () => {
      const el = ref.current, f = fill.current
      if (!el || !f) return
      const r = el.getBoundingClientRect(), h = el.offsetHeight - 12
      const p = Math.min(Math.max((innerHeight * 0.7 - r.top) / r.height, 0), 1), y = p * h
      f.style.height = y + 'px'
      el.querySelectorAll<HTMLElement>('.tli').forEach(i => i.classList.toggle('on', i.offsetTop + 8 <= y + 4))
    }
    up(); addEventListener('scroll', up, { passive: true }); addEventListener('resize', up)
    return () => { removeEventListener('scroll', up); removeEventListener('resize', up) }
  }, [])
  return <div className="tl" ref={ref}><div className="tlf" ref={fill} />{T.map(t => <div className="tli" key={t[0]}><b>{t[0]}</b><h3>{t[1]}</h3><p>{t[2]}</p></div>)}</div>
}
