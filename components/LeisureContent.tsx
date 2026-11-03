'use client'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useSiteEffects } from '@/lib/useSiteEffects'
import { TOURS } from '@/data/tours'
const SLUG: Record<string, string> = Object.fromEntries(Object.values(TOURS).map(x => [x.name, x.slug]))
type Tour = [string, string, string, string[], number, string, number, number, string, string, string]
const T: Tour[] = Object.values(TOURS).map(x => [x.name, x.region, x.place, x.cats, x.days.length, x.label, x.price, x.rating, x.a, x.b, x.desc] as Tour)
const CATS: string[] = ['All','Beach','Adventure','Culture','Honeymoon','Family','Wildlife','Luxury','Hills']
const LC: Record<string, string> = {'Bestseller':'','New':'teal','Few seats left':'red','Honeymoon pick':'pink','Group departure':'blue','Family favourite':'green'}
const SEG = [['all', 'All tours'], ['dom', 'Domestic'], ['intl', 'International']]
export default function LeisureContent() {
  useSiteEffects()
  const [r, setR] = useState('all')
  const [c, setC] = useState('All')
  const [q, setQ] = useState('')
  const [s, setS] = useState('pop')
  const prev = useRef<Set<string>>(new Set())
  useEffect(() => {
    document.body.dataset.cl = 'View'
    const f = () => { const h = location.hash; if (h === '#domestic') setR('dom'); else if (h === '#international') setR('intl') }
    f(); addEventListener('hashchange', f)
    return () => { delete document.body.dataset.cl; removeEventListener('hashchange', f) }
  }, [])
  const ok = (t: Tour, skip?: string) => (skip === 'r' || r === 'all' || t[1] === r) && (skip === 'c' || c === 'All' || t[3].includes(c)) && (!q || (t[0] + ' ' + t[2] + ' ' + t[3].join(' ') + ' ' + t[5] + ' ' + t[10]).toLowerCase().includes(q.toLowerCase()))
  const S: Record<string, (a: Tour, b: Tour) => number> = { pl: (a, b) => a[6] - b[6], ph: (a, b) => b[6] - a[6], ds: (a, b) => a[4] - b[4], dl: (a, b) => b[4] - a[4] }
  let L = T.filter(t => ok(t))
  if (S[s]) L = [...L].sort(S[s])
  const seen = prev.current
  useEffect(() => { prev.current = new Set(L.map(t => t[0])) })
  const reset = () => { setR('all'); setC('All'); setQ('') }
  return (
    <div className="pg">
      <header className="ph"><div className="orb o1" /><div className="orb o2" /><div className="wrap">
        <span className="crumb glass reveal">Home <b>/</b> Leisure</span>
        <h1 className="reveal" style={{ '--d': '.1s' } as React.CSSProperties}>Holidays designed around <em>you</em>.</h1>
        <p className="reveal" style={{ '--d': '.2s' } as React.CSSProperties}>Browse hand-crafted domestic and international tours — search, filter by theme and find your next escape.</p>
      </div></header>
      <section style={{ paddingTop: 20 }}><div className="wrap">
        <div className="fp glass reveal">
          <div className="r1">
            <label className="sb glass">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search destinations, themes or tour names…" autoComplete="off" />
              {q && <button type="button" aria-label="Clear" onClick={() => setQ('')}>✕</button>}
            </label>
            <select className="srt" value={s} onChange={e => setS(e.target.value)}>
              <option value="pop">Sort: Popular</option><option value="pl">Price: low to high</option><option value="ph">Price: high to low</option><option value="ds">Duration: shortest</option><option value="dl">Duration: longest</option>
            </select>
          </div>
          <div className="r2">
            <div className="seg">{SEG.map(([k, n]) => <button key={k} className={r === k ? 'on' : ''} onClick={() => setR(k)}>{n}<small>{T.filter(t => ok(t, 'r') && (k === 'all' || t[1] === k)).length}</small></button>)}</div>
            <div className="cats">{CATS.map(k => { const n = T.filter(t => ok(t, 'c') && (k === 'All' || t[3].includes(k))).length; return <button key={k} className={(c === k ? 'on' : '') + (n ? '' : ' off')} onClick={() => setC(k)}>{k}<small>{n}</small></button> })}</div>
          </div>
        </div>
        <div className="cnt">Showing <b>{L.length}</b> of {T.length} tours{q ? ` for “${q}”` : ''}</div>
        <div className="g3 tgrid">
          {L.length ? L.map((t, i) => (
            <Link key={t[0]} href={SLUG[t[0]] ? `/leisure/${SLUG[t[0]]}` : '/contact'} className={'post glass' + (seen.has(t[0]) ? '' : ' new')} style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="img" style={{ '--a': t[8], '--b': t[9] } as React.CSSProperties}>
                <div className="pimg" data-l="Tour image · 800×500" />
                {t[5] && <span className={'lbl ' + LC[t[5]]}>{t[5]}</span>}
                <span className="rg">{t[1] === 'dom' ? 'Domestic' : 'International'}</span>
              </div>
              <div className="pt">
                <div className="mt"><b>{t[2]}</b><span>{t[4]} days / {t[4] - 1} nights</span></div>
                <h3>{t[0]}</h3><p>{t[10]}</p>
                <div className="tf"><div><small>From, per person</small><strong>₹{t[6].toLocaleString('en-IN')}</strong></div><span className="rt">★ {t[7]}</span></div>
                <span className="rd">View itinerary →</span>
              </div>
            </Link>
          )) : (
            <div className="empty glass"><h3>No tours match your search</h3><p>Try a different keyword, or clear the filters.</p><button className="btn pri" onClick={reset}>Reset filters</button></div>
          )}
        </div>
        <div className="cta glass reveal" style={{ marginTop: 90 }}><span className="eyebrow">Can’t find it?</span><h2>We’ll build your <em>perfect</em> trip</h2><p className="sub">Tell us where, when and how — a travel designer will craft a custom itinerary.</p><Link href="/contact" className="btn pri">Request a custom tour →</Link></div>
      </div></section>
    </div>
  )
}
