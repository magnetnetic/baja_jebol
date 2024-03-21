'use client'

import { Meteors } from '@/components/ui/meteor'
import { ROOT_PATH } from '@/lib/data'
import { ActivityStat } from '@/lib/type'
import Image from 'next/image'

export default function ActivityCard({ activity }: { activity: ActivityStat }) {
  return (
    <div className='relative flex h-32 w-full flex-row overflow-hidden border border-sky-300'>
      <div className='relative h-full w-full opacity-60'>
        <Image
          unoptimized
          src={`${ROOT_PATH}${activity.definition.pgcrImage}`}
          fill
          sizes='100%'
          alt='Activity Image'
          style={{ objectFit: 'cover' }}
        />
        <div className='absolute inset-0 bg-slate-700/20 backdrop-filter'></div>
      </div>
      <div className='absolute flex h-full w-full flex-col justify-between'>
        <div className='flex flex-row justify-between'>
          <div className='p-4 text-white drop-shadow-xl'>
            <h3 className='text-lg'>
              {activity.definition.displayProperties.name}
            </h3>
          </div>
          <div className='p-4 text-white drop-shadow-xl'>
            <Image
              unoptimized
              src={`${ROOT_PATH}${activity.definition.displayProperties.icon}`}
              alt='Activity Icon'
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className='ms-auto p-2'>
          <p>{activity.period}</p>
        </div>
      </div>
      {/* <Meteors number={10} /> */}
    </div>
  )
}
