import HeroBackground from './hero-background'

export default function Hero() {
  return (
    <section
      id='hero'
      className='flex h-[50vh] flex-row items-center justify-center bg-blue-50 bg-gradient-to-r from-black from-20% via-sky-700 via-50% to-black to-80% md:h-[100vh]'
    >
      <div className='z-0 opacity-50'>
        <HeroBackground />
      </div>
      <div className='container z-10 flex flex-col items-center justify-center text-white'>
        <h1 className='text-5xl font-bold drop-shadow-md'>
          KesatriaBajaJebol#6101
        </h1>
        <h1 className='text-3xl font-bold drop-shadow-md'>~ Xiap Xediah ~</h1>
      </div>
    </section>
  )
}
