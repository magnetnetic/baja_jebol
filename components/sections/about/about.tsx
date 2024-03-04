'use client'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import Card from '../../ui/card'
import { EmblaCarousel } from './carousel'
import CarouselBackground from './carousuel-background'
import AboutDescription from './about-description'
import { motion } from 'framer-motion'

const BANNER_HEIGHT = '25vh'

function ParallaxBannerComponent() {
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

export default function About() {
  return (
    <section
      id='about'
      className='flex h-[100vh] flex-col bg-blue-950 pt-8 lg:h-[100vh]'
    >
      <div className='container flex flex-col justify-between gap-4 lg:flex-row'>
        <motion.div
          className='text-sky-100'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          variants={{
            offscreen: { x: -100, opacity: 0 },
            onscreen: { x: 0, opacity: 1 }
          }}
        >
          <AboutDescription />
        </motion.div>
        <div className='flex w-full flex-row justify-between gap-12 lg:flex-col'>
          <motion.div
            className='bg flex w-full flex-col items-center justify-center'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
          >
            <Card
              title='Kings Fall Connoisseur'
              completion='69 Clears'
              imageSrc='/kings-fall.jpg'
            />
          </motion.div>
          <motion.div
            className='flex w-full flex-col items-center justify-center'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
          >
            <Card
              title='Trial of Osiris Loyalist'
              completion='6 Flawless'
              imageSrc='/trials.jpg'
            />
          </motion.div>
        </div>
      </div>

      <div className='h-full'>
        <ParallaxBannerComponent />
      </div>
    </section>
  )
}
