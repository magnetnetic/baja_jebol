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
    <section id='char' className='container mb-8 flex flex-col pt-4'>
      <div className='grid grid-rows-1 gap-4 text-sky-100 md:grid-cols-2'>
        <div className='flex flex-col gap-4'>
          {activityStats.map((activity: ActivityStat) => (
            <div key={activity.period} className='bg-black'>
              <ActivityCard activity={activity} />
            </div>
          ))}
        </div>
        <div>
          <CardGrid />
        </div>
      </div>
    </section>
  )
}
