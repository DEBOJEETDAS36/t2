'use client'
import { useImages } from './ImagesProvider'
// Fills its (position: relative) parent with public/images/<name>.<ext> if that file exists; renders nothing otherwise.
export default function Pic({ name, alt = '', sizes, priority }: { name: string; alt?: string; sizes?: string; priority?: boolean }) {
  const { find } = useImages()
  const src = find(name)
  return src ? <img className="pic" src={src} alt={alt} sizes={sizes} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" /> : null
}
