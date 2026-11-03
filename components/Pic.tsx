'use client'
import { useImages } from './ImagesProvider'
// Fills its (position: relative) parent with public/images/<name>.<ext> if that file exists; renders nothing otherwise.
export default function Pic({ name, alt = '' }: { name: string; alt?: string }) {
  const { find } = useImages()
  const src = find(name)
  return src ? <img className="pic" src={src} alt={alt} loading="lazy" decoding="async" /> : null
}
