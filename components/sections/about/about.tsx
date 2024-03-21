import ParallaxBannerComponent from './parallax-banner'
import AboutDescription from './about-description'
import CharacterEquipment from './character-equipment'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export default function About() {
  return (
    <section id='about' className='flex h-full flex-col bg-blue-950 pt-8'>
      <div className='container flex flex-col justify-between gap-4 lg:flex-row'>
        <AboutDescription />
        <Suspense fallback={<Skeleton className='h-[75vh] w-full' />}>
          <CharacterEquipment />
        </Suspense>
      </div>
      <div className='mt-4 h-full'>
        <ParallaxBannerComponent />
      </div>
    </section>
  )
}
