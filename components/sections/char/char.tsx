import Card from '@/components/ui/card'
import {
  ROOT_PATH,
  fetchActivityHistory,
  fetchAggregateActivityStats,
  fetchCharacterList,
  fetchEntityDefinition
} from '@/lib/data'
import {
  CROTAS_END_HASH,
  DEEP_STONE_HASH,
  GARDEN_HASH,
  KINGS_FALL_HASH,
  LAST_WISH_HASH,
  ROOT_OF_NIGHTMARES_HASH,
  VAULT_OF_GLASS_HASH,
  VOW_DISCIPLE_HASH,
  getCrotasEndDefinition,
  getDeepStoneCryptDefinition,
  getGardenOfSalvationDefinition,
  getKingsFallDefinition,
  getLastWishDefinition,
  getRootOfNightmareDefinition,
  getVaultOfGlassDefinition,
  getVowOfDiscipleDefinition
} from '@/lib/definitions/raid'

interface ActivityHistoryList {
  activities: ActivityHistory[]
}

interface ActivityHistory {
  period: string
  activityDetails: ActivityDetail
}

interface ActivityDetail {
  referenceId: number
  directorActivityHash: number
  instanceId: string
}

interface AggregateActivityStatsList {
  activities: AggregateActivityStats[]
}

interface AggregateActivityStats {
  activityHash: number
  values: AggregateActivityStatsValue
}

interface AggregateActivityStatsValue {
  activityCompletions: {
    statId: string
    basic: {
      value: number
      displayValue: string
    }
  }
}

interface ActivityDefinition {
  displayProperties: {
    description: string
    name: string
    icon: string
  }
  pgcrImage: string
}

export default async function Char() {
  const activityData: ActivityHistoryList = await fetchActivityHistory()
  const raidStats: AggregateActivityStatsList =
    await fetchAggregateActivityStats()

  const gardenRaid = raidStats.activities.find(
    (activity: AggregateActivityStats) => {
      return activity.activityHash === GARDEN_HASH
    }
  )

  const lastWishRaid = raidStats.activities.find(
    (activity: AggregateActivityStats) => {
      return activity.activityHash === LAST_WISH_HASH
    }
  )

  const deepStoneCryptRaid = raidStats.activities.find(
    (activity: AggregateActivityStats) => {
      return activity.activityHash === DEEP_STONE_HASH
    }
  )

  const vaultOfGlassRaid = raidStats.activities.find(
    (activity: AggregateActivityStats) => {
      return activity.activityHash === VAULT_OF_GLASS_HASH
    }
  )

  const vowOfDiscipleRaid = raidStats.activities.find(
    (activity: AggregateActivityStats) => {
      return activity.activityHash === VOW_DISCIPLE_HASH
    }
  )

  const kingsFallRaid = raidStats.activities.find(
    (activity: AggregateActivityStats) => {
      return activity.activityHash === KINGS_FALL_HASH
    }
  )

  const rootOfNightmareRaid = raidStats.activities.find(
    (activity: AggregateActivityStats) => {
      return activity.activityHash === ROOT_OF_NIGHTMARES_HASH
    }
  )

  const crotasEndRaid = raidStats.activities.find(
    (activity: AggregateActivityStats) => {
      return activity.activityHash === CROTAS_END_HASH
    }
  )

  const gardenRaidDefinition: ActivityDefinition =
    await getGardenOfSalvationDefinition()

  const lastWishRaidDefinition: ActivityDefinition =
    await getLastWishDefinition()

  const deepStoneCryptRaidDefinition: ActivityDefinition =
    await getDeepStoneCryptDefinition()

  const vaultOfGlassRaidDefinition: ActivityDefinition =
    await getVaultOfGlassDefinition()

  const vowOfDiscipleRaidDefinition: ActivityDefinition =
    await getVowOfDiscipleDefinition()

  const kingsFallRaidDefinition: ActivityDefinition =
    await getKingsFallDefinition()

  const rootOfNightmareRaidDefinition: ActivityDefinition =
    await getRootOfNightmareDefinition()

  const crotasEndRaidDefinition: ActivityDefinition =
    await getCrotasEndDefinition()

  function convertISOToReadable(isoString: string) {
    const date = new Date(isoString)
    return date.toLocaleString('id-ID')
  }

  return (
    <section id='char' className='flex h-[100vh] flex-col bg-blue-950 pt-4'>
      <div className='container flex flex-row text-sky-100'>
        <div>
          {activityData.activities.map((activity: ActivityHistory) => (
            <div key={activity.period}>
              <h1>{convertISOToReadable(activity.period)}</h1>
              <ActivityRow referenceId={activity.activityDetails.referenceId} />
            </div>
          ))}
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <Card
            imageSrc={`${ROOT_PATH}${gardenRaidDefinition.pgcrImage}`}
            title={gardenRaidDefinition.displayProperties.name}
            completion={
              gardenRaid?.values.activityCompletions.basic.displayValue || ''
            }
          />
          <Card
            imageSrc={`${ROOT_PATH}${lastWishRaidDefinition.pgcrImage}`}
            title={lastWishRaidDefinition.displayProperties.name}
            completion={
              lastWishRaid?.values.activityCompletions.basic.displayValue || ''
            }
          />
          <Card
            imageSrc={`${ROOT_PATH}${deepStoneCryptRaidDefinition.pgcrImage}`}
            title={deepStoneCryptRaidDefinition.displayProperties.name}
            completion={
              deepStoneCryptRaid?.values.activityCompletions.basic
                .displayValue || ''
            }
          />
          <Card
            imageSrc={`${ROOT_PATH}${vaultOfGlassRaidDefinition.pgcrImage}`}
            title={vaultOfGlassRaidDefinition.displayProperties.name}
            completion={
              vaultOfGlassRaid?.values.activityCompletions.basic.displayValue ||
              ''
            }
          />
          <Card
            imageSrc={`${ROOT_PATH}${vowOfDiscipleRaidDefinition.pgcrImage}`}
            title={vowOfDiscipleRaidDefinition.displayProperties.name}
            completion={
              vowOfDiscipleRaid?.values.activityCompletions.basic
                .displayValue || ''
            }
          />
          <Card
            imageSrc={`${ROOT_PATH}${kingsFallRaidDefinition.pgcrImage}`}
            title={kingsFallRaidDefinition.displayProperties.name}
            completion={
              kingsFallRaid?.values.activityCompletions.basic.displayValue || ''
            }
          />
          <Card
            imageSrc={`${ROOT_PATH}${rootOfNightmareRaidDefinition.pgcrImage}`}
            title={rootOfNightmareRaidDefinition.displayProperties.name}
            completion={
              rootOfNightmareRaid?.values.activityCompletions.basic
                .displayValue || ''
            }
          />
          <Card
            imageSrc={`${ROOT_PATH}${crotasEndRaidDefinition.pgcrImage}`}
            title={crotasEndRaidDefinition.displayProperties.name}
            completion={
              crotasEndRaid?.values.activityCompletions.basic.displayValue || ''
            }
          />
        </div>
      </div>
    </section>
  )
}

export async function ActivityRow({ referenceId }: { referenceId: number }) {
  const activityRowData: ActivityDefinition = await fetchEntityDefinition(
    'DestinyActivityDefinition',
    referenceId
  )

  return (
    <>
      <p>{activityRowData.displayProperties.name}</p>
      <p>{activityRowData.displayProperties.description}</p>
    </>
  )
}
