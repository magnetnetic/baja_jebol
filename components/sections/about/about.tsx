import CardGrid from '@/components/ui/card-grid'
import ParallaxBannerComponent from './parallax-banner'
import AboutDescription from './about-description'

export default async function About() {
  return (
    <section
      id='about'
      className='flex h-full flex-col bg-blue-950 pt-8 lg:h-[100vh]'
    >
      <div className='container flex flex-col justify-between gap-4 lg:flex-row'>
        <div>
          <AboutDescription />
        </div>
        <div className='mb-8'>
          <CardGrid />
        </div>
      </div>

      <div className='h-full'>
        <ParallaxBannerComponent />
      </div>
    </section>
  )
}
