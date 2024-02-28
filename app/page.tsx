import Gallery from '@/components/home/gallery'
import Hero from '@/components/home/hero'
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
