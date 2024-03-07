'use client'
import { motion } from 'framer-motion'
import Card from './card'
import { RaidStat } from '@/lib/type'
import { ROOT_PATH } from '@/lib/data'

export default function CardGrid({ raidStats }: { raidStats: RaidStat[] }) {
  return (
    <div className='grid w-full grid-cols-2 justify-between gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4'>
      {raidStats.map(raidStat => {
        return (
          <div key={raidStat.activityHash}>
            <motion.div
              className='flex w-full flex-col items-center justify-center'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
              }}
            >
              <Card
                title={raidStat.definition.displayProperties.name}
                completion={
                  raidStat.values.activityCompletions.basic.displayValue
                }
                imageSrc={`${ROOT_PATH}${raidStat.definition.pgcrImage}`}
              />
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
