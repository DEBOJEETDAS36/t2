import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { TOURS } from '@/data/tours'
import TourDetail from '@/components/TourDetail'
type P = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return Object.keys(TOURS).map(slug => ({ slug })) }
export async function generateMetadata({ params }: P): Promise<Metadata> { const { slug } = await params; const t = TOURS[slug]; return { title: t ? `${t.name} — Wanderline` : 'Tour — Wanderline' } }
export default async function Page({ params }: P) { const { slug } = await params; const t = TOURS[slug]; if (!t) notFound(); return <TourDetail tour={t} /> }
