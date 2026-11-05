'use client'
import { useEffect } from 'react'
export default function Cursor() {
  useEffect(() => {
    if (!matchMedia('(pointer:fine)').matches) return
    const root = document.documentElement
    const q = (e: Event, s: string) => (e.target as Element | null)?.closest?.(s) as HTMLElement | null
    const move = (e: MouseEvent) => {
      const x = e.clientX, y = e.clientY
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
    addEventListener('mousemove', move, { passive: true }); document.addEventListener('mouseout', out)
    return () => { removeEventListener('mousemove', move); document.removeEventListener('mouseout', out) }
  }, [])
  return null
}
