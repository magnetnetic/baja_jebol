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
  fetchCharacterEquipment,
  fetchEntityDefinition,
  fetchItemSockets
} from '@/lib/data'
import { DEF_INVENTORY_ITEM } from '@/lib/definitions/entity'
import { Equipments, ItemSockets, ItemDefinition } from '@/lib/type'
import Image from 'next/image'

export default async function CharacterEquipment() {
  const titan: Equipments = await fetchCharacterEquipment(
    GET_CHARACTER_EQUIPMENT_TITAN
  )
  return (
    <div className='grid w-full grid-cols-1 gap-8'>
      <div className='flex w-full flex-row rounded-md bg-indigo-950 p-4'>
        <Equipments equipments={titan} />
      </div>
    </div>
  )
}

function Equipments({ equipments }: { equipments: Equipments }) {
  return (
    <div className='flex flex-col gap-4'>
      {equipments.equipments.slice(0, 4).map((equipment, index) => (
        <div key={index} className='flex flex-row gap-2'>
          <EquipmentCard
            itemHash={equipment.itemHash}
            itemInstanceId={equipment.itemInstanceId}
          />
        </div>
      ))}
    </div>
  )
}

async function EquipmentCard({
  itemHash,
  itemInstanceId
}: {
  itemHash: number
  itemInstanceId: string
}) {
  const equipment: ItemDefinition = await fetchEntityDefinition(
    DEF_INVENTORY_ITEM,
    itemHash
  )
  return (
    <div>
      <div className='relative h-24 w-24'>
        <Image
          priority
          src={`${ROOT_PATH}${equipment.displayProperties.icon}`}
          alt={equipment.displayProperties.name}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className='flex w-full flex-col text-sky-100'>
        <p className='font-semibold antialiased'>
          {equipment.displayProperties.name}
        </p>
        <div className='flex flex-row gap-1 border-b-sky-100 align-middle'>
          {/* {equipment.damageTypeDefinition ? (
                <div className='relative h-5 w-5'>
                  <Image
                    src={`${ROOT_PATH}${equipment.damageTypeDefinition.transparentIconPath}`}
                    fill
                    alt={equipment.definition.displayProperties.name}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ) : null} */}
          <label className='text-sm text-muted text-sky-200 antialiased'>
            {equipment.itemTypeDisplayName}
          </label>
        </div>
        <div className='mt-auto flex w-full flex-row gap-1'>
          {itemInstanceId && <PerksRow itemInstanceId={itemInstanceId} />}
        </div>
      </div>
    </div>
  )
}

async function PerksRow({ itemInstanceId }: { itemInstanceId: string }) {
  const itemPerks: ItemSockets = await fetchItemSockets(itemInstanceId)
  return (
    <div className='flex flex-row'>
      {itemPerks?.itemSockets.map(
        (socket, index) =>
          socket.plugHash && (
            <div key={index} className='relative h-6 w-6'>
              <PerkIcon plugHash={socket.plugHash} />
            </div>
          )
      )}
    </div>
  )
}

async function PerkIcon({ plugHash }: { plugHash: number }) {
  const perkIcon = await fetchEntityDefinition(DEF_INVENTORY_ITEM, plugHash)
  return (
    <HoverCard openDelay={50} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Image
          fill
          alt={perkIcon.displayProperties.name}
          style={{ objectFit: 'contain' }}
          src={`${ROOT_PATH}${perkIcon.displayProperties.icon}`}
          className='rounded-md opacity-70 hover:opacity-100'
        />
      </HoverCardTrigger>
      <HoverCardContent className='w-full max-w-60 bg-sky-100'>
        <label className='text-sm text-black'>
          {perkIcon.displayProperties.description}
        </label>
      </HoverCardContent>
    </HoverCard>
  )
}
