import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import {
  GET_CHARACTER_EQUIPMENT_HUNTER,
  GET_CHARACTER_EQUIPMENT_TITAN,
  GET_CHARACTER_EQUIPMENT_WARLOCK,
  ROOT_PATH,
  fetchCharacterEquipment
} from '@/lib/data'
import { ItemStat } from '@/lib/type'
import Image from 'next/image'

export default async function CharacterEquipment() {
  const titan: ItemStat[] = await fetchCharacterEquipment(
    GET_CHARACTER_EQUIPMENT_TITAN
  )
  const hunter: ItemStat[] = await fetchCharacterEquipment(
    GET_CHARACTER_EQUIPMENT_HUNTER
  )
  const warlock: ItemStat[] = await fetchCharacterEquipment(
    GET_CHARACTER_EQUIPMENT_WARLOCK
  )
  return (
    <div className='grid w-full grid-cols-1 gap-8'>
      <div className='flex w-full flex-row rounded-md bg-indigo-950 p-4'>
        <EquipmentRow equipments={titan} />
        <div>{titan[11].definition.displayProperties.name}</div>
      </div>
      <div className='flex flex-col border border-sky-300 p-4'>
        <EquipmentRow equipments={hunter} />
      </div>
      <div className='flex flex-col border border-sky-300 p-4'>
        <EquipmentRow equipments={warlock} />
      </div>
    </div>
  )
}

function EquipmentRow({ equipments }: { equipments: ItemStat[] }) {
  return (
    <div className='flex flex-col gap-4'>
      {equipments
        .filter(
          equipment => equipment.definition.summaryItemHash !== 3407672161
        )
        .map((equipment, index) => (
          <div key={index} className='flex flex-row gap-2'>
            <div className='relative h-24 w-24 rounded-md'>
              <Image
                src={`${ROOT_PATH}${equipment.definition.displayProperties.icon}`}
                fill
                alt={equipment.definition.displayProperties.name}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className='flex w-full flex-col text-sky-100'>
              <p className='font-semibold antialiased'>
                {equipment.definition.displayProperties.name}
              </p>
              <div className='flex flex-row gap-1 border-b-sky-100 align-middle'>
                {equipment.damageTypeDefinition ? (
                  <div className='relative h-5 w-5'>
                    <Image
                      src={`${ROOT_PATH}${equipment.damageTypeDefinition.transparentIconPath}`}
                      fill
                      alt={equipment.definition.displayProperties.name}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                ) : null}
                <label className='text-sm text-muted text-sky-200 antialiased'>
                  {equipment.definition.itemTypeDisplayName}
                </label>
              </div>
              <div className='mt-auto flex w-full flex-row gap-1'>
                {equipment.itemSockets?.slice(0, 5).map((socket, index) => (
                  <div key={index}>
                    <HoverCard openDelay={100} closeDelay={0}>
                      <HoverCardTrigger asChild>
                        <Button
                          variant='link'
                          size='icon'
                          className='opacity-70 hover:opacity-100'
                        >
                          <div className='relative h-full w-full'>
                            <Image
                              fill
                              alt={socket.definition?.displayProperties.name}
                              style={{ objectFit: 'contain' }}
                              src={`${ROOT_PATH}${socket.definition?.displayProperties.icon}`}
                            />
                          </div>
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className='w-60 bg-sky-100'>
                        <p className='text-black'>
                          {socket.definition.displayProperties.name}
                        </p>
                        <span className='text-sm text-black'>
                          {socket.definition.displayProperties.description}
                        </span>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
