import Gallery from '@/components/sections/about/about'
import Char from '@/components/sections/char/char'
import Hero from '@/components/sections/hero/hero'
import Nav from '@/components/ui/nav'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Gallery />
      <Char />
    </div>
  )
}
