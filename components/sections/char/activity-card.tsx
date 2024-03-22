'use client'

import { Meteors } from '@/components/ui/meteor'
import { ROOT_PATH } from '@/lib/data'
import { ActivityStat } from '@/lib/type'
import Image from 'next/image'

export default function ActivityCard({ activity }: { activity: ActivityStat }) {
  return (
    <div className='relative flex h-16 w-full border border-sky-300'>
      <div className='relative h-full w-full'>
        <Image
          fill
          src={`${ROOT_PATH}${activity.definition.pgcrImage}`}
          alt='Activity Image'
          style={{ objectFit: 'cover' }}
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-slate-700/20 backdrop-filter'></div>
      </div>
      <div className='absolute flex h-full w-full flex-col justify-between p-2'>
        <div className='flex flex-row items-center justify-between'>
          <div className='text-white drop-shadow-xl'>
            <h3 className='text-sm'>
              {activity.definition.displayProperties.name}
            </h3>
          </div>
          <div className='text-white drop-shadow-xl'>
            <Image
              src={`${ROOT_PATH}${activity.definition.displayProperties.icon}`}
              alt='Activity Icon'
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className='ms-auto text-sm'>
          <p>{activity.period}</p>
        </div>
      </div>
      {/* <Meteors number={10} /> */}
    </div>
  )
}
