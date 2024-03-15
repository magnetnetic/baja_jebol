import { ROOT_PATH, fetchItemSockets } from '@/lib/data'
import { EquipmentWithDefinitions } from '@/lib/type'
import Image from 'next/image'
import PerksRow from './perk-icon'

export default async function EquipmentsWrapper({
  equipments
}: {
  equipments: EquipmentWithDefinitions[]
}) {
  const subclass = equipments[11]
  const subclassPerks = await fetchItemSockets(subclass.itemInstanceId)
  return (
    <div className='flex w-full flex-col'>
      <div className='relative mb-8 min-h-24 w-full md:min-h-40'>
        <Image
          alt='potato'
          src={`${ROOT_PATH}${subclassPerks[2].definition.secondaryIcon}`}
          fill
          style={{ objectFit: 'cover' }}
          className='absolute left-0 top-0'
        />
      </div>
      {equipments
        ?.filter(equipment =>
          [3520001075, 2673424576, 715326750].includes(
            equipment.definition.summaryItemHash
          )
        )
        .slice(0, 8)
        .map((equipment, index) => (
          <div
            key={index}
            className='flex flex-row gap-2 divide-solid border-b border-amber-300/75 pb-1'
          >
            <EquipmentCard equipment={equipment} />
          </div>
        ))}
    </div>
  )
}

function EquipmentCard({ equipment }: { equipment: EquipmentWithDefinitions }) {
  return (
    <div className='flex w-full flex-row items-center gap-2'>
      <div className='relative h-20 w-20'>
        <Image
          priority
          src={`${ROOT_PATH}${equipment.definition.displayProperties.icon}`}
          alt={equipment.definition.displayProperties.name}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className='flex w-3/4 flex-col text-sky-100'>
        <p className='font-semibold antialiased'>
          {equipment.definition.displayProperties.name}
        </p>
        <div className='flex flex-row gap-1 align-middle'>
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
            {equipment.definition.itemTypeDisplayName}
          </label>
        </div>
        <div className='mt-auto flex flex-row gap-1'>
          {equipment.itemInstanceId && (
            <PerksRow itemInstanceId={equipment.itemInstanceId} />
          )}
        </div>
      </div>
    </div>
  )
}
