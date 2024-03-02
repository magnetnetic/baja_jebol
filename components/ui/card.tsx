import React, { useRef } from 'react'
import Image from 'next/image'
import { useInView } from 'framer-motion'

export default function Card({
  imageSrc,
  title,
  completion
}: {
  imageSrc: string
  title: string
  completion: string
}) {
  return (
    <div className='mx-auto mb-8 flex w-full flex-col items-center justify-center gap-4 border border-sky-300 p-6 text-sky-100'>
      <div className='relative h-36 w-36'>
        <Image
          unoptimized
          src={imageSrc}
          fill
          sizes='100%'
          alt='test'
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <h1 className='border-b-2 border-amber-300 pb-2 text-xl font-semibold uppercase'>
          {completion}
        </h1>
      </div>
    </div>
  )
}
