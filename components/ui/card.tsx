import React from 'react'
import Image from 'next/image'

export default function Card() {
  return (
    <div className='mx-auto mb-12 flex w-[40rem] flex-col items-center justify-center border border-sky-300 text-sky-100'>
      <div className='relative mx-28 mt-20 h-36 w-36'>
        <Image
          unoptimized
          src='/kings-fall.jpg'
          fill
          sizes='100%'
          alt='test'
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='m-12 text-center'>
        <h1 className='text-xl font-bold'>King&apos;s Fall Connoisseur</h1>
        <h1 className='m-4 text-2xl font-semibold uppercase underline underline-offset-4'>
          69 Completions
        </h1>
      </div>
      <p className='mb-2 mt-auto text-sm'>nice</p>
    </div>
  )
}
