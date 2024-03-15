import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import { ROOT_PATH, fetchItemSockets } from '@/lib/data'
import { itemSocketsWithDefinitions } from '@/lib/type'
import Image from 'next/image'

export default async function PerksRow({
  itemInstanceId
}: {
  itemInstanceId: string
}) {
  const itemPerks: itemSocketsWithDefinitions[] =
    await fetchItemSockets(itemInstanceId)
  return (
    <div className='flex w-full flex-row flex-wrap'>
      {itemPerks
        ?.filter(socket =>
          socket.definition && socket.definition.summaryItemHash
            ? [3520001075, 715326750].includes(
                socket.definition.summaryItemHash
              )
            : false
        )
        .map(
          (socket, index) =>
            socket.plugHash && (
              <div key={index} className='me-2'>
                <PerkIcon itemPerk={socket} />
              </div>
            )
        )}
    </div>
  )
}

function PerkIcon({ itemPerk }: { itemPerk: itemSocketsWithDefinitions }) {
  return (
    <HoverCard openDelay={50} closeDelay={0}>
      <HoverCardTrigger asChild>
        <div className='flex h-auto w-full flex-row items-center gap-1 opacity-85 hover:opacity-100'>
          <div className='relative h-6 w-6'>
            <Image
              fill
              alt={itemPerk.definition.displayProperties.name}
              style={{ objectFit: 'contain' }}
              src={`${ROOT_PATH}${itemPerk.definition.displayProperties.icon}`}
              className='rounded-md '
            />
          </div>
          <label className='text-sm antialiased'>
            {itemPerk.definition.displayProperties.name}
          </label>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className='w-full max-w-80 bg-sky-100'>
        <label className='text-sm text-black'>
          {itemPerk.definition.displayProperties.description}
        </label>
      </HoverCardContent>
    </HoverCard>
  )
}
