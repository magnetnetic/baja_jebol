import Image from 'next/image'
import titan from '/public/titan-ghost.jpg'

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative flex h-[50vh] flex-row items-center justify-center bg-blue-50 bg-gradient-to-r from-black from-20% via-sky-700 via-50% to-black to-80% md:h-[100vh]'
    >
      <div className='absolute h-full w-full opacity-50'>
        <HeroBackground />
      </div>
      <div className='container relative flex flex-col items-center justify-center text-white'>
        <h1 className='text-3xl font-bold drop-shadow-md md:text-5xl'>
          KesatriaBajaJebol#6101
        </h1>
        <h1 className='text-2xl font-bold drop-shadow-md md:text-3xl'>
          ~ Xiap Xediah ~
        </h1>
      </div>
    </section>
  )
}

function HeroBackground() {
  return (
    <div className='absolute inset-0'>
      <Image
        priority
        alt='Background'
        src={titan}
        fill
        quality={100}
        style={{
          objectFit: 'cover'
        }}
      />
    </div>
  )
}
