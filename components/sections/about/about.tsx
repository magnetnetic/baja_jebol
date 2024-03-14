import ParallaxBannerComponent from './parallax-banner'
import AboutDescription from './about-description'
import CharacterEquipment from './character-equipment'

export default async function About() {
  return (
    <section id='about' className='flex h-full flex-col bg-blue-950 pt-8'>
      <div className='container flex flex-col justify-between gap-4 lg:flex-row'>
        <AboutDescription />
        <CharacterEquipment />
      </div>
      <div className='h-full'>
        <ParallaxBannerComponent />
      </div>
    </section>
  )
}
