'use client'

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import { EmblaCarousel } from './carousel'
import Image from 'next/image'
import titan from '/public/saint-14-stuff.webp'

const BANNER_HEIGHT = '25vh'

export default function ParallaxBannerComponent() {
  return (
    <ParallaxBanner style={{ height: BANNER_HEIGHT }}>
      <ParallaxBannerLayer expanded={true} speed={-40}>
        <div className='relative h-full'>
          <CarouselBackground />
        </div>
      </ParallaxBannerLayer>
      <ParallaxBannerLayer>
        <div className='h-full bg-indigo-950 opacity-50'></div>
      </ParallaxBannerLayer>
      <ParallaxBannerLayer>
        <EmblaCarousel />
      </ParallaxBannerLayer>
    </ParallaxBanner>
  )
}

function CarouselBackground() {
  return (
    <Image
      unoptimized
      alt='Titan Logo'
      src={titan}
      fill
      style={{
        objectFit: 'cover'
      }}
    />
  )
}
