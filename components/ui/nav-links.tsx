'use client'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const links = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '#about'
  }
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map(link => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('hover:text-amber-300', {
              'text-amber-300': pathname === link.href
            })}
          >
            <p>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
