import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Skeleton } from '@/components/ui/skeleton'
import { ROOT_PATH, fetchEntityDefinition, fetchItemSockets } from '@/lib/data'
import { DEF_INVENTORY_ITEM, DEF_SANDBOX_PERK } from '@/lib/definitions/entity'
import {
  Equipment,
  InventoryItemDefinition,
  ItemSocket,
  SandboxPerkDefinition
} from '@/lib/type'
import Image from 'next/image'
import { Suspense } from 'react'

export async function SubclassCard({ subclass }: { subclass: Equipment }) {
  const definition: InventoryItemDefinition = await fetchEntityDefinition(
    DEF_INVENTORY_ITEM,
    subclass.itemHash
  )
  const subclassPerks: ItemSocket[] = await fetchItemSockets(
    subclass.itemInstanceId
  )

  return (
    <div className='mb-3 px-4'>
      <div className='flex w-full flex-col border-b border-amber-300/75 pb-3'>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex gap-4'>
            <div className='relative h-14 w-14'>
              <Image
                alt={definition.displayProperties.name}
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
          <div className='me-8 grid h-full grid-cols-2 gap-2'>
            <Aspect plugHash={subclassPerks[5]?.plugHash ?? 0} />
            <Aspect plugHash={subclassPerks[6]?.plugHash ?? 0} />
          </div>
        </div>
        <Suspense fallback={<Skeleton className='ms-16 h-20 w-3/4' />}>
          <div className='ml-[72px] flex w-3/4 flex-row flex-wrap'>
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
  )
}

async function Aspect({ plugHash }: { plugHash: number }) {
  const definition: InventoryItemDefinition = await fetchEntityDefinition(
    DEF_INVENTORY_ITEM,
    plugHash
  )
  const sandboxPerk: SandboxPerkDefinition = await fetchEntityDefinition(
    DEF_SANDBOX_PERK,
    definition.perks[0].perkHash
  )
  return (
    <Popover>
      <PopoverTrigger>
        <div className='relative h-8 w-8'>
          <Image
            fill
            alt={definition.displayProperties.name}
            src={`${ROOT_PATH}${definition.displayProperties.icon}`}
            className='rounded-md drop-shadow-lg'
            style={{ objectFit: 'contain' }}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className='w-80 rounded-lg bg-slate-800 p-4'>
        <div className='flex items-center space-x-2'>
          <div className='relative h-6 w-6'>
            <Image
              fill
              alt={definition.displayProperties.name}
              src={`${ROOT_PATH}${sandboxPerk.displayProperties.icon}`}
              className='rounded-md'
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h3 className='font-semibold text-sky-100 antialiased'>
            {definition.displayProperties.name}
          </h3>
        </div>
        <div>
          <span className='text-xs italic text-muted text-sky-100'>
            {definition.flavorText}
          </span>
          <hr className='my-2 border-white' />
          <span className='text-xs text-sky-50'>
            {sandboxPerk.displayProperties.description}
          </span>
        </div>
      </PopoverContent>
    </Popover>
  )
}

async function SubclassPerk({ plugHash }: { plugHash: number }) {
  const definition: InventoryItemDefinition = await fetchEntityDefinition(
    DEF_INVENTORY_ITEM,
    plugHash
  )
  return (
    <div className='me-2 flex gap-1 py-1 opacity-60 hover:opacity-100'>
      <div className='relative h-4 w-4'>
        <Image
          fill
          alt={definition.displayProperties.name}
          style={{ objectFit: 'contain' }}
          src={`${ROOT_PATH}${definition.displayProperties.icon}`}
          className='rounded-md'
        />
      </div>
      <label className='text-xs text-sky-50'>
        {definition.displayProperties.name}
      </label>
    </div>
  )
}
