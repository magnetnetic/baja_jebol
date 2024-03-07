import React from 'react'
import Image from 'next/image'

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
    <div className='relative mx-auto flex h-72 w-full flex-col items-center justify-between gap-4 border border-sky-300 p-6 text-sky-100'>
      <div className='flex flex-col items-center'>
        <div className='relative h-36 w-36 md:h-32 md:w-32 lg:h-28 lg:w-28'>
          <Image
            unoptimized
            src={imageSrc}
            fill
            sizes='100%'
            alt='test'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='mt-4 flex-1 overflow-hidden text-center'>
          <p className='text-base'>{title}</p>
        </div>
      </div>
      <p className='border-b-2 border-amber-300 text-sm font-semibold uppercase'>
        {completion} Clears
      </p>
    </div>
  )
}
