'use client'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import Card from '../ui/card'
import { EmblaCarousel } from '../ui/carousel'
import CarouselBackground from './carousuel-background'
import About from './about'

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
        <div className='h-full bg-indigo-950 opacity-50'></div>
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
      className='flex h-[50vh] flex-col bg-blue-950 pt-8 md:h-[100vh]'
    >
      <div className='container flex flex-row justify-between gap-4'>
        <div className=' text-sky-100'>
          <About />
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col items-center justify-center'>
            <Card
              title='Kings Fall Connoissur'
              completion='69 Clears'
              imageSrc='/kings-fall.jpg'
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Card
              title='Trial of Osiris Loyalist'
              completion='6 Flawless'
              imageSrc='/trials.jpg'
            />
          </div>
        </div>
      </div>

      <div className='h-[30vh]'>
        <ParallaxBannerComponent />
      </div>
    </section>
  )
}
