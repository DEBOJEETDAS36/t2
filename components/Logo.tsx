'use client'
import Link from 'next/link'
import { useImages } from './ImagesProvider'
// public/images/logo.png (or .svg/.webp) replaces the text logo. Optional logo-light.* is used in the light theme.
export default function Logo() {
  const { find } = useImages()
  const main = find('logo'), light = find('logo-light')
  return (
    <Link href="/" className="logo" aria-label="Wanderline home">
      {main ? <><img className={'logo-img' + (light ? ' ld' : '')} src={main} alt="Wanderline" />{light && <img className="logo-img ll" src={light} alt="Wanderline" />}</> : <><i />Wanderline</>}
    </Link>
  )
}
