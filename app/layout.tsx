import './globals.css'
import type { Metadata } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import Providers from '@/components/Providers'
const serif = Fraunces({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['300', '500'], variable: '--font-serif', display: 'swap' })
const sans = Manrope({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-sans', display: 'swap' })
export const metadata: Metadata = { title: 'Wanderline — Journeys, beautifully curated', description: 'Premium leisure and MICE travel.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${serif.variable} ${sans.variable}`}>
      <body><Providers>{children}</Providers></body>
    </html>
  )
}
