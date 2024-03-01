import Gallery from '@/components/sections/about/about'
import Hero from '@/components/sections/hero/hero'
import Nav from '@/components/ui/nav'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Gallery />
    </div>
  )
}
