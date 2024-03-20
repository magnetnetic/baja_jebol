import {
  ROOT_PATH,
  fetchEntityDefinition,
  fetchItemSockets,
  fetchItemStats
} from '@/lib/data'
import {
  Equipment,
  EquipmentWithDefinitions,
  InventoryItemDefinition,
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
import EquipmentPopover from './equipment-popover'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { DEF_INVENTORY_ITEM } from '@/lib/definitions/entity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
      <SubclassCard subclass={subclass} />

      {equipments.slice(0, 8).map((equipment, index) => (
        <div
          key={index}
          className='mb-3 flex flex-row gap-2 border-b border-amber-300/75 px-4 pb-3'
        >
          <Suspense fallback={<EquipmentCardSkeleton />}>
            <EquipmentCard equipment={equipment} />
          </Suspense>
        </div>
      ))}
    </div>
  )
}

async function SubclassCard({ subclass }: { subclass: Equipment }) {
  const definition: InventoryItemDefinition = await fetchEntityDefinition(
    DEF_INVENTORY_ITEM,
    subclass.itemHash
  )
  const subclassPerks: ItemSocket[] = await fetchItemSockets(
    subclass.itemInstanceId
  )

  return (
    <div className='mb-3 flex flex-row gap-2 px-4'>
      <div className='flex w-full items-center border-b border-amber-300/75 pb-3'>
        <div className='flex w-full flex-col'>
          <div className='flex gap-4'>
            <div className='relative h-14 w-14'>
              <Image
                alt='subclass'
                src={`${ROOT_PATH}${definition.displayProperties.icon}`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className='flex flex-col justify-center text-sky-100'>
              <h3 className='-mb-0.5 text-lg font-semibold antialiased'>
                {definition.displayProperties.name}
              </h3>
              <span className='text-sm text-muted text-sky-200 antialiased'>
                {definition.itemTypeDisplayName}
              </span>
            </div>
          </div>
          <Suspense fallback={<Skeleton className='ms-16 h-20 w-3/4' />}>
            <div className='ml-[72px] flex w-3/4 flex-row flex-wrap text-sky-100'>
              {subclassPerks.slice(0, 11).map((socket, index) => {
                return (
                  <div key={index}>
                    <SubclassPerk plugHash={socket.plugHash as number} />
                  </div>
                )
              })}
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

async function SubclassPerk({ plugHash }: { plugHash: number }) {
  const definition: InventoryItemDefinition = await fetchEntityDefinition(
    DEF_INVENTORY_ITEM,
    plugHash
  )
  return (
    <div className='me-2 flex flex-row gap-1 opacity-60 hover:opacity-100'>
      <div className='relative h-4 w-4'>
        <Image
          fill
          alt='potato'
          style={{ objectFit: 'contain' }}
          src={`${ROOT_PATH}${definition.displayProperties.icon}`}
          className='rounded-md'
        />
      </div>
      <label className='text-xs'>{definition.displayProperties.name}</label>
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
    <div className='flex'>
      <div className='flex w-full flex-col'>
        <div className='flex gap-4'>
          <Popover>
            <PopoverTrigger>
              <div className='group flex items-center gap-4'>
                <div className='relative h-14 w-14'>
                  <Image
                    priority
                    src={`${ROOT_PATH}${definition.displayProperties.icon}`}
                    alt={definition.displayProperties.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className='rounded-lg'
                  />
                </div>
                <div className='flex flex-col items-start'>
                  <div className='flex flex-row items-center gap-2'>
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
