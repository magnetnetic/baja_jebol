import {
  fetchActivityHistory,
  fetchCharacterList,
  fetchEntityDefinition
} from '@/lib/data'

interface Activity {
  period: string
  activityDetails: ActivityDetail
}

interface ActivityDetail {
  referenceId: number
  directorActivityHash: number
  instanceId: string
}

interface ActivityList {
  activities: Activity[]
}

interface ActivityDefinition {
  displayProperties: {
    description: string
    name: string
    icon: string
  }
}

export default async function Char() {
  const activityData: ActivityList = await fetchActivityHistory()

  function convertISOToReadable(isoString: string) {
    const date = new Date(isoString)
    return date.toLocaleString('en-US')
  }

  return (
    <section id='char' className='mt-24 flex h-[100vh] flex-col bg-blue-950'>
      <div>alo</div>
      <div className='container text-sky-100'>
        {activityData.activities.map((activity: Activity) => (
          <div key={activity.period}>
            <h1>{convertISOToReadable(activity.period)}</h1>
            <ActivityRow referenceId={activity.activityDetails.referenceId} />
          </div>
        ))}
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
