'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
export function useSiteEffects() {
  const p = usePathname()
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.setAttribute('data-vis', ''); io.unobserve(e.target) } }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const co = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return
      co.unobserve(e.target)
      const el = e.target as HTMLElement, t = +(el.dataset.c || 0)
      // Read the suffix from data-suffix, or default to "+" unless data-plus="no".
      const suffix = el.dataset.suffix ?? (el.dataset.plus === 'no' ? '' : '+')
      const paint = (n: number) => { el.innerHTML = Math.round(n).toLocaleString('en-IN') + (suffix ? `<span>${suffix}</span>` : '') }
      if (reduce) { paint(t); return }
      const st = performance.now()
      const f = (n: number) => { const k = Math.min((n - st) / 1800, 1); paint(t * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f) }
      requestAnimationFrame(f)
    }), { threshold: 0.6 })
    document.querySelectorAll('[data-c]').forEach(el => co.observe(el))
    return () => { io.disconnect(); co.disconnect() }
  }, [p])
}
