import { fetchActivityHistoryWithDefinitions } from '@/lib/data'
import ActivityCard from './activity-card'
import { ActivityStat } from '@/lib/type'
import CardGrid from '@/components/ui/card-grid'

export default async function Char() {
  const activityStats: ActivityStat[] =
    await fetchActivityHistoryWithDefinitions()

  function convertISOToReadable(isoString: string) {
    const date = new Date(isoString)
    return date.toLocaleString('id-ID')
  }

  return (
    <section id='char' className='flex h-full flex-col bg-blue-950 pt-4'>
      <div className='container flex flex-col gap-4 text-sky-100'>
        <div className='grid w-full grid-cols-1 gap-4 md:w-1/2'>
          {activityStats.map((activity: ActivityStat) => (
            <div key={activity.period}>
              <ActivityCard activity={activity} />
            </div>
          ))}
        </div>
        <div className='mb-8'>
          <CardGrid />
        </div>
      </div>
    </section>
  )
}
