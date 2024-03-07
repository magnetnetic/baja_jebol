'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 })
  ])

  return (
    <div className='flex h-full flex-row items-center justify-center text-white'>
      <FontAwesomeIcon
        icon={faQuoteLeft}
        size='2xl'
        className='fa-icon text-amber-300'
      />
      <div
        className='embla bg mx-12 h-full w-1/2 text-2xl md:w-1/4'
        ref={emblaRef}
      >
        <div className='embla__container h-full text-center italic'>
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
          <div className='embla__slide flex items-center justify-center'>
            Saya thorny...
          </div>
          <div className='embla__slide flex items-center justify-center'>
            Bismillah rampage
          </div>
          <div className='embla__slide flex items-center justify-center'>
            Mencari kesempatan dalam kesempitan
          </div>
          <div className='embla__slide flex items-center justify-center'>
            Pelan-pelan tapi tidak pasti
          </div>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faQuoteRight}
        size='2xl'
        className='fa-icon text-amber-300'
      />
    </div>
  )
}
