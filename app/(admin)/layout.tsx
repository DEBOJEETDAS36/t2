import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Dashboard — Wanderline', robots: { index: false, follow: false } }
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="admwrap"><div className="orb o1" style={{ position: 'fixed' }} />{children}</div>
}
