import {
  GET_CHARACTER_EQUIPMENT_HUNTER,
  GET_CHARACTER_EQUIPMENT_TITAN,
  GET_CHARACTER_EQUIPMENT_WARLOCK,
  fetchCharacterEquipment
} from '@/lib/data'
import { EquipmentWithDefinitions } from '@/lib/type'

import EquipmentsWrapper from './equipment-card'

export default async function CharacterEquipment() {
  const titan: EquipmentWithDefinitions[] = await fetchCharacterEquipment(
    GET_CHARACTER_EQUIPMENT_TITAN
  )
  return (
    <div className='grid w-full grid-cols-1'>
      <div className='flex w-full flex-row rounded-md bg-indigo-950'>
        <EquipmentsWrapper equipments={titan} />
      </div>
    </div>
  )
}
