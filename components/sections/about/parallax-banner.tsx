'use client'

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import { EmblaCarousel } from './carousel'
import CarouselBackground from './carousuel-background'

const BANNER_HEIGHT = '25vh'

export default function ParallaxBannerComponent() {
  return (
    <ParallaxBanner style={{ height: BANNER_HEIGHT }}>
      <ParallaxBannerLayer expanded={true} speed={-40}>
        <div className='h-full'>
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
