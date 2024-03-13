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
    <div className='flex flex-row gap-8'>
      <div className='flex flex-col'>
        <EquipmentRow equipments={titan} />
      </div>
      <div className='flex flex-col'>
        <EquipmentRow equipments={hunter} />
      </div>
      <div className='flex flex-col'>
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
            <Image
              src={`${ROOT_PATH}${equipment.definition.displayProperties.icon}`}
              width={48}
              height={48}
              alt={equipment.definition.displayProperties.name}
              style={{ objectFit: 'cover' }}
            />
            <div className='flex flex-col text-sky-100'>
              <p className='font-semibold antialiased'>
                {equipment.definition.displayProperties.name}
              </p>
              <div className='flex flex-row gap-2 align-middle'>
                {equipment.damageTypeDefinition ? (
                  <Image
                    src={`${ROOT_PATH}${equipment.damageTypeDefinition.transparentIconPath}`}
                    width={16}
                    height={16}
                    alt={equipment.definition.displayProperties.name}
                    style={{ objectFit: 'cover' }}
                  />
                ) : null}
                <label className='text-sm text-muted antialiased'>
                  {equipment.definition.itemTypeDisplayName}
                </label>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
