import {
  ROOT_PATH,
  fetchEntityDefinition,
  fetchItemCommonData,
  fetchItemSockets,
  fetchItemStats
} from '@/lib/data'
import {
  Equipment,
  EquipmentWithDefinitions,
  InventoryItemDefinition,
  ItemCommonData,
  ItemSocket,
  ItemSocketsWithDefinitions,
  ItemStatsWithDefinitions
} from '@/lib/type'
import Image from 'next/image'
import PerksRow from './perk-icon'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { DEF_INVENTORY_ITEM } from '@/lib/definitions/entity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SubclassCard } from './subclass-card'

export default async function EquipmentsWrapper({
  equipments
}: {
  equipments: Equipment[]
}) {
  const subclass = equipments[11]
  const subclassPerks: ItemSocket[] = await fetchItemSockets(
    subclass.itemInstanceId
  )
  const subclassDefinition: InventoryItemDefinition =
    await fetchEntityDefinition(
      DEF_INVENTORY_ITEM,
      subclassPerks[2].plugHash as number
    )
  return (
    <div className='grid w-full grid-cols-1'>
      <div className='relative mb-4 min-h-24 w-full md:min-h-40'>
        <Image
          alt={subclassDefinition.displayProperties.name}
          src={`${ROOT_PATH}${subclassDefinition.secondaryIcon}`}
          fill
          style={{ objectFit: 'cover' }}
          className='absolute left-0 top-0 rounded-t-xl'
        />
      </div>
      <div className='px-4'>
        <SubclassCard subclass={subclass} />
        {equipments.slice(0, 8).map((equipment, index) => (
          <div key={index} className='mb-3 flex flex-row gap-2 px-4'>
            <Suspense fallback={<EquipmentCardSkeleton />}>
              <EquipmentCard equipment={equipment} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  )
}

function EquipmentCardSkeleton() {
  return (
    <div className='grid w-full grid-cols-1 gap-2'>
      <div className='flex w-full flex-row gap-4 '>
        <Skeleton className='h-14 w-14' />
        <div className='flex w-1/2 flex-col justify-center gap-2'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-20' />
        </div>
      </div>
    </div>
  )
}

async function EquipmentCard({ equipment }: { equipment: Equipment }) {
  // const equipmentStats: ItemStatsWithDefinitions[] = await fetchItemStats(
  //   equipment.itemInstanceId
  // )

  const definition: InventoryItemDefinition = await fetchEntityDefinition(
    DEF_INVENTORY_ITEM,
    equipment.itemHash
  )

  return (
    <div className='flex border-b border-amber-300/75 pb-3'>
      <div className='flex w-full flex-col'>
        <div className='flex gap-4'>
          <EquipmentPopover
            itemInstanceId={equipment.itemInstanceId}
            definition={definition}
          />
        </div>
        <Suspense fallback={<Skeleton className='ms-16 h-10 w-3/4' />}>
          {equipment.itemInstanceId && (
            <div className='ml-[72px] flex flex-col justify-center text-sky-100'>
              <PerksRow itemInstanceId={equipment.itemInstanceId} />
            </div>
          )}
        </Suspense>
      </div>
    </div>
  )
}

async function EquipmentPopover({
  definition,
  itemInstanceId
}: {
  definition: InventoryItemDefinition
  itemInstanceId: string
}) {
  const commonData: ItemCommonData = await fetchItemCommonData(itemInstanceId)
  let ornamentDefinition: InventoryItemDefinition = definition
  if (commonData.overrideStyleItemHash) {
    ornamentDefinition = await fetchEntityDefinition(
      DEF_INVENTORY_ITEM,
      commonData.overrideStyleItemHash
    )
  }
  return (
    <Popover>
      <PopoverTrigger>
        <div className='group flex items-center gap-4'>
          <div className='relative h-14 w-14'>
            <Image
              priority
              src={`${ROOT_PATH}${ornamentDefinition.displayProperties.icon}`}
              alt={ornamentDefinition.displayProperties.name}
              fill
              style={{ objectFit: 'contain' }}
              className='rounded-lg'
            />
            {commonData.state === 9 ? (
              <div className='absolute inset-0 overflow-hidden rounded-lg'>
                <div className='absolute inset-0 bg-gradient-to-t from-red-500/70 via-red-400/0 to-transparent'></div>
              </div>
            ) : commonData.state === 5 ? (
              <div className='absolute inset-0 overflow-hidden rounded-lg'>
                <div className='absolute inset-0 bg-gradient-to-t from-amber-500/50 via-amber-500/0 to-transparent'></div>
              </div>
            ) : null}
          </div>
          <div className='flex flex-col items-start'>
            <div className='flex items-center gap-2'>
              <h3 className='-mb-0.5 text-lg font-semibold text-sky-100 antialiased group-hover:underline group-hover:underline-offset-4'>
                {definition.displayProperties.name}
              </h3>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size='xs'
                className='text-amber-300'
              />
            </div>
            <span className='text-sm text-muted text-sky-200 antialiased'>
              {definition.itemTypeDisplayName}
            </span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className='w-80 bg-slate-800'>
        <div className='flex flex-col'>
          <div className='relative aspect-video w-full overflow-hidden'>
            <Image
              src={`${ROOT_PATH}${definition.screenshot}`}
              alt={definition.displayProperties.name}
              fill
              style={{ objectFit: 'contain' }}
              className='border-none bg-black'
            />
          </div>
          {/* <div className='mt-4'>
              <EquipmentPopover stats={equipmentStats} />
            </div> */}
        </div>
      </PopoverContent>
    </Popover>
  )
}
