'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 })
  ])

  return (
    <div
      className='embla mx-auto h-full w-full text-xl text-white'
      ref={emblaRef}
    >
      <div className='embla__container h-full italic'>
        <div className='embla__slide flex items-center justify-center'>
          Sek yo rek tak [bukak engram, ngebuild, transmog]
        </div>
        <div className='embla__slide flex items-center justify-center'>
          WEHEHEHEH HAHAHAHAHAH WOOOOOOOOOO!!!
        </div>
        <div className='embla__slide flex items-center justify-center'>
          HAAaaaAh haAaAaah hoOOOh, hanjeng
        </div>
        <div className='embla__slide flex items-center justify-center'>
          Adek kelas ini banyak bacot
        </div>
        <div className='embla__slide flex items-center justify-center'>
          Dapet apa roll e [nama]
        </div>
        <div className='embla__slide flex items-center justify-center'>
          Kengs Fol, heheheh
        </div>
      </div>
    </div>
  )
}
