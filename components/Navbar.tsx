'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import type React from 'react'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'
const L = [['Home', '/'], ['About Us', '/about'], ['Leisure', '/leisure'], ['Cruise', '/cruise'], ['MICE', '/mice'], ['Blogs', '/blogs'], ['Gallery', '/gallery'], ['Contact', '/contact']]
const MORE: [string, string][] = [
  ['Flights', '/more#flights'],
  ['Visa', '/more#visa'],
  ['Travel Insurance', '/more#insurance'],
  ['Passport Assistance', '/more#passport'],
]
export default function Navbar() {
  const p = usePathname()
  const [s, setS] = useState(false)
  const [o, setO] = useState(false)
  useEffect(() => { const f = () => setS(scrollY > 30); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  useEffect(() => setO(false), [p])
  const mice = p === '/mice'
  const more = p.startsWith('/more')
  const close = () => setO(false)
  const blur = (e: React.MouseEvent<HTMLAnchorElement>) => { setO(false); e.currentTarget.blur() }
  const items = () => L.map(([n, h]) => <Link key={n} href={h} onClick={close} className={h === p ? 'act' : ''}>{n}</Link>)
  return (
    <>
      <nav className={s ? 'scrolled' : ''}><div className="wrap">
        <Logo />
        <div className="links">
          {items()}
          <div className="more">
            <Link href="/more" onClick={close} className={more ? 'act' : ''} aria-haspopup="true">More
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
            </Link>
            <div className="more-menu glass" aria-label="More services">
              {MORE.map(([n, h]) => <Link key={h} href={h} onClick={blur}>{n}</Link>)}
            </div>
          </div>
        </div>
        <div className="right">
          <ThemeToggle />
          <Link href={mice ? '/mice#rfp' : '/contact'} className="btn pri nbtn">{mice ? 'Request a proposal' : 'Plan my trip'}</Link>
          <button className={'burger' + (o ? ' open' : '')} aria-label="Menu" onClick={() => setO(!o)}><span /><span /><span /></button>
        </div>
      </div></nav>
      <div className={'mnav glass' + (o ? ' open' : '')}>
        {items()}
        <div className="mgroup">
          <Link href="/more" onClick={close} className={'mgroup-h' + (more ? ' act' : '')}>More</Link>
          {MORE.map(([n, h]) => <Link key={h} href={h} onClick={close}>{n}</Link>)}
        </div>
      </div>
    </>
  )
}
