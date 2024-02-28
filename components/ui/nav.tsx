'use client'
import Link from 'next/link'
import NavLinks from './nav-links'
import { useEffect, useState } from 'react'

function useIsScrolled(threshold = 30) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const scrollPercentage = (window.scrollY / windowHeight) * 100
      setIsScrolled(scrollPercentage > threshold)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return isScrolled
}

export default function Nav() {
  const isScrolled = useIsScrolled(10)

  const navbarClass = !isScrolled
    ? 'scrolled-nav'
    : 'bg-indigo-950 bg-blend-lighten shadow-md'

  return (
    <div
      className={`fixed left-0 right-0 top-0 ${navbarClass} z-40 py-4 font-bold text-white transition-all duration-300 ease-in-out`}
    >
      <div className='container'>
        <div className='flex flex-row items-center justify-between'>
          <Link href='/'>Baja Jebol</Link>
          <div className='flex flex-row space-x-6'>
            <NavLinks />
          </div>
          <div>Soup</div>
        </div>
      </div>
    </div>
  )
}
