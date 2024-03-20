import { Progress } from '@/components/ui/progress'
import { ItemStatsWithDefinitions } from '@/lib/type'

export default function EquipmentPopover({
  stats
}: {
  stats: ItemStatsWithDefinitions[]
}) {
  return (
    <div className='grid gap-2 px-4 text-sky-100'>
      {stats?.map((stat, index) => {
        return (
          <div key={index} className='flex flex-col'>
            <div>{stat.definition.displayProperties.name}</div>
            <div className='flex flex-row justify-center gap-2'>
              <Progress className='m-auto h-2 w-full' value={stat.value} />
              <span className='text-sm'>{stat.value}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
