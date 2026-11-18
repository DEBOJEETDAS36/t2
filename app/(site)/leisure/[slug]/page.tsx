import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ALL_TOURS } from '@/data/leisure-tours'
import TourDetail from '@/components/TourDetail'
type P = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return Object.keys(ALL_TOURS).map(slug => ({ slug })) }
export async function generateMetadata({ params }: P): Promise<Metadata> { const { slug } = await params; const t = ALL_TOURS[slug]; return { title: t ? `${t.name} — Wanderline` : 'Tour — Wanderline' } }
export default async function Page({ params }: P) { const { slug } = await params; const t = ALL_TOURS[slug]; if (!t) notFound(); return <TourDetail tour={t} /> }
