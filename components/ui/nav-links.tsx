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
  },
  {
    name: 'Gallery',
    href: '#gallery'
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
            className={clsx('hover:text-sky-200', {
              'text-sky-200': pathname === link.href
            })}
          >
            <p>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
