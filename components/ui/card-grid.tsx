import Card from './card'
import { RaidStat } from '@/lib/type'
import { ROOT_PATH, fetchRaidDataWithDefinitions } from '@/lib/data'
import {
  LAST_WISH_HASH,
  ROOT_OF_NIGHTMARES_HASH,
  GARDEN_HASH,
  DEEP_STONE_HASH,
  VAULT_OF_GLASS_HASH,
  VOW_DISCIPLE_HASH,
  KINGS_FALL_HASH,
  CROTAS_END_HASH
} from '@/lib/definitions/raid'

const raidDefinitionHashes = [
  LAST_WISH_HASH,
  ROOT_OF_NIGHTMARES_HASH,
  GARDEN_HASH,
  DEEP_STONE_HASH,
  VAULT_OF_GLASS_HASH,
  VOW_DISCIPLE_HASH,
  KINGS_FALL_HASH,
  CROTAS_END_HASH
]

export default async function CardGrid() {
  const raidStats: RaidStat[] =
    await fetchRaidDataWithDefinitions(raidDefinitionHashes)

  return (
    <div className='grid w-full grid-cols-2 justify-between gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4'>
      {raidStats.map(raidStat => {
        return (
          <div key={raidStat.activityHash}>
            <Card
              title={raidStat.definition.displayProperties.name}
              completion={
                raidStat.values.activityCompletions.basic.displayValue
              }
              imageSrc={`${ROOT_PATH}${raidStat.definition.pgcrImage}`}
            />
          </div>
        )
      })}
    </div>
  )
}
