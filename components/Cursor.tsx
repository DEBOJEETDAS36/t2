'use client'
import { useEffect, useRef } from 'react'
export default function Cursor() {
  const d = useRef<HTMLDivElement>(null)
  const r = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!matchMedia('(pointer:fine)').matches) return
    const root = document.documentElement
    root.classList.add('cur')
    const D = d.current!, R = r.current!
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, raf = 0
    const q = (e: Event, s: string) => (e.target as Element | null)?.closest?.(s) as HTMLElement | null
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY
      D.style.opacity = R.style.opacity = '1'
      D.style.transform = `translate(${x}px,${y}px)`
      root.style.setProperty('--px', (x / innerWidth - 0.5).toFixed(3))
      root.style.setProperty('--py', (y / innerHeight - 0.5).toFixed(3))
      const c = q(e, '.glass')
      if (c) { const b = c.getBoundingClientRect(); c.style.setProperty('--mx', x - b.left + 'px'); c.style.setProperty('--my', y - b.top + 'px') }
      const t = q(e, '.tm,.post')
      if (t) { const b = t.getBoundingClientRect(); t.style.setProperty('--ry', ((x - b.left) / b.width - 0.5) * 10 + 'deg'); t.style.setProperty('--rx', -((y - b.top) / b.height - 0.5) * 10 + 'deg') }
      const m = q(e, '.btn')
      if (m) { const b = m.getBoundingClientRect(); m.style.transform = `translate(${(x - b.left - b.width / 2) * 0.22}px,${(y - b.top - b.height / 2) * 0.35}px)` }
    }
    const out = (e: MouseEvent) => {
      const t = q(e, '.tm,.post')
      if (t && !t.contains(e.relatedTarget as Node)) { t.style.setProperty('--rx', '0deg'); t.style.setProperty('--ry', '0deg') }
      const m = q(e, '.btn')
      if (m && !m.contains(e.relatedTarget as Node)) m.style.transform = ''
    }
    const over = (e: MouseEvent) => {
      R.classList.toggle('hov', !!q(e, 'a,button,input,select,textarea,.pimg'))
      const l = q(e, '.pimg') ? 'Photo' : q(e, '.post,.feat') ? (document.body.dataset.cl || 'Read') : ''
      R.dataset.t = l; R.classList.toggle('lab', !!l)
    }
    const loop = () => { rx += (x - rx) * 0.16; ry += (y - ry) * 0.16; R.style.transform = `translate(${rx}px,${ry}px)`; raf = requestAnimationFrame(loop) }
    addEventListener('mousemove', move, { passive: true }); document.addEventListener('mouseout', out); document.addEventListener('mouseover', over); loop()
    return () => { removeEventListener('mousemove', move); document.removeEventListener('mouseout', out); document.removeEventListener('mouseover', over); cancelAnimationFrame(raf); root.classList.remove('cur') }
  }, [])
  return <><div id="cd" ref={d} /><div id="cr" ref={r} /></>
}
