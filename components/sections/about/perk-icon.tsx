import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import { ROOT_PATH, fetchEntityDefinition, fetchItemSockets } from '@/lib/data'
import { DEF_INVENTORY_ITEM } from '@/lib/definitions/entity'
import { ItemSocket, ItemSocketsWithDefinitions } from '@/lib/type'
import Image from 'next/image'

export default async function PerksRow({
  itemInstanceId
}: {
  itemInstanceId: string
}) {
  const itemPerks: ItemSocketsWithDefinitions[] =
    await fetchItemSockets(itemInstanceId)
  return (
    <div className='flex w-full flex-wrap'>
      {itemPerks
        // ?.filter(socket =>
        //   socket.definition && socket.definition.summaryItemHash
        //     ? [3520001075, 715326750].includes(
        //         socket.definition.summaryItemHash
        //       )
        //     : false
        // )
        .map(
          (socket, index) =>
            socket.isVisible && (
              <div key={index}>
                <PerkIcon itemPerk={socket} />
              </div>
            )
        )}
    </div>
  )
}

async function PerkIcon({ itemPerk }: { itemPerk: ItemSocket }) {
  const definition = await fetchEntityDefinition(
    DEF_INVENTORY_ITEM,
    itemPerk.plugHash as number
  )
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger>
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
          <label className='text-xs antialiased'>
            {definition.displayProperties.name}
          </label>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className='w-full max-w-80 bg-sky-100'>
        <label className='text-sm text-black'>
          {definition.displayProperties.description}
        </label>
      </HoverCardContent>
    </HoverCard>
  )
}
