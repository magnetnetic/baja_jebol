'use client'
import Image from 'next/image'
import titan from '/public/titan-ghost.jpg'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative flex flex-row items-center justify-center'
    >
      <div className='flex h-full w-full'>
        <ParallaxBanner className='h-screen'>
          <ParallaxBannerLayer
            className='h-full bg-black'
            expanded={false}
            speed={-80}
            opacity={[0.8, 1]}
          >
            <div className='relative h-full w-full bg-cover bg-right-bottom opacity-80 sm:bg-right-bottom md:bg-center'>
              <HeroBackground />
            </div>
          </ParallaxBannerLayer>
          <ParallaxBannerLayer
            className='my-auto flex h-full'
            speed={-40}
            expanded={true}
          >
            <div className='flex w-full flex-col items-center justify-center space-y-2 text-white'>
              <h1 className='text-3xl font-bold antialiased drop-shadow-md md:text-5xl'>
                KesatriaBajaJebol#6101
              </h1>
              <h1 className='text-2xl font-bold antialiased drop-shadow-md md:text-3xl'>
                ~ Xiap Xediah ~
              </h1>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </div>
    </section>
  )
}

function HeroBackground() {
  return (
    <Image
      quality={100}
      priority
      alt='Background'
      src={titan}
      fill
      style={{
        objectFit: 'cover',
        objectPosition: '25% 100%'
      }}
    />
  )
}
