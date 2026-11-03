'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'
const L = [['Home', '/'], ['About', '/about'], ['Leisure', '/leisure'], ['MICE', '/mice'], ['Blogs', '/blogs'], ['Gallery', '/gallery'], ['Contact', '/contact']]
export default function Navbar() {
  const p = usePathname()
  const [s, setS] = useState(false)
  const [o, setO] = useState(false)
  useEffect(() => { const f = () => setS(scrollY > 30); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  useEffect(() => setO(false), [p])
  const mice = p === '/mice'
  const items = (cls: string) => L.map(([n, h]) => <Link key={n} href={h} onClick={() => setO(false)} className={h === p ? 'act' : ''}>{n}</Link>)
  return (
    <>
      <nav className={s ? 'scrolled' : ''}><div className="wrap">
        <Logo />
        <div className="links">{items('')}</div>
        <div className="right">
          <ThemeToggle />
          <Link href={mice ? '/mice#rfp' : '/contact'} className="btn pri nbtn">{mice ? 'Request a proposal' : 'Plan my trip'}</Link>
          <button className={'burger' + (o ? ' open' : '')} aria-label="Menu" onClick={() => setO(!o)}><span /><span /><span /></button>
        </div>
      </div></nav>
      <div className={'mnav glass' + (o ? ' open' : '')}>{items('')}</div>
    </>
  )
}
