import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { BLOGS } from '@/data/blogs'
import BlogPost from '@/components/BlogPost'
type P = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return BLOGS.map(b => ({ slug: b.slug })) }
export async function generateMetadata({ params }: P): Promise<Metadata> { const { slug } = await params; const b = BLOGS.find(x => x.slug === slug); return { title: b ? `${b.title} — Wanderline` : 'Blog — Wanderline' } }
export default async function Page({ params }: P) { const { slug } = await params; const b = BLOGS.find(x => x.slug === slug); if (!b) notFound(); return <BlogPost post={b} /> }
