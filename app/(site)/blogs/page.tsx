import type { Metadata } from 'next'
import BlogsContent from '@/components/BlogsContent'
export const metadata: Metadata = { title: 'Blogs — Wanderline' }
export default function Page() { return <BlogsContent /> }
