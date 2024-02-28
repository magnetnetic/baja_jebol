'use client'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import Card from '../ui/card'
import { EmblaCarousel } from '../ui/carousel'
import CarouselBackground from './carousuel-background'

const BANNER_HEIGHT = '30vh'

function ParallaxBannerComponent() {
  return (
    <ParallaxBanner style={{ height: BANNER_HEIGHT }}>
      <ParallaxBannerLayer expanded={true} speed={-25}>
        <div className='h-full'>
          <CarouselBackground />
        </div>
      </ParallaxBannerLayer>
      <ParallaxBannerLayer>
        <div className='h-full bg-blue-950 opacity-60'></div>
      </ParallaxBannerLayer>
      <ParallaxBannerLayer>
        <EmblaCarousel />
      </ParallaxBannerLayer>
    </ParallaxBanner>
  )
}

export default function Gallery() {
  return (
    <section
      id='gallery'
      className='flex h-[50vh] flex-col bg-blue-950 pt-12 md:h-[100vh]'
    >
      <div className='my-4 h-[30vh]'>
        <ParallaxBannerComponent />
      </div>
      <div className='container mt-12 flex flex-col items-center justify-center'>
        <Card />
      </div>
    </section>
  )
}
