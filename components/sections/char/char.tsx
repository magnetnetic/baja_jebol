import Card from '@/components/ui/card'
import {
  ROOT_PATH,
  fetchActivityHistory,
  fetchAggregateActivityStats,
  fetchEntityDefinition
} from '@/lib/data'
import {
  ActivityDefinition,
  ActivityHistory,
  ActivityHistoryList,
  AggregateActivityStats,
  AggregateActivityStatsList
} from '@/lib/type'

export default async function Char() {
  const activityData: ActivityHistoryList = await fetchActivityHistory()
  const raidStats: AggregateActivityStatsList =
    await fetchAggregateActivityStats()

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
