import { ROOT_PATH, fetchItemSockets } from '@/lib/data'
import {
  EquipmentWithDefinitions,
  itemSocketsWithDefinitions
} from '@/lib/type'
import Image from 'next/image'
import PerksRow from './perk-icon'

export default async function EquipmentsWrapper({
  equipments
}: {
  equipments: EquipmentWithDefinitions[]
}) {
  const subclass = equipments[11]
  const subclassPerks: itemSocketsWithDefinitions[] = await fetchItemSockets(
    subclass.itemInstanceId
  )
  return (
    <div className='flex w-full flex-col'>
      <div className='relative mb-4 min-h-24 w-full md:min-h-40'>
        <Image
          alt='potato'
          src={`${ROOT_PATH}${subclassPerks[2].definition.secondaryIcon}`}
          fill
          style={{ objectFit: 'cover' }}
          className='absolute left-0 top-0 rounded-t-xl'
        />
      </div>
      {/* Subclass */}
      <div className='mb-4 flex h-full w-full flex-row items-center gap-2 px-4'>
        <div className='relative h-20 w-20'>
          <Image
            alt='subclass'
            src={`${ROOT_PATH}${subclass.definition.displayProperties.icon}`}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className='flex h-full w-3/4 flex-col text-sky-100'>
          <div className='flex flex-col justify-between'>
            <label className='font-semibold antialiased'>
              {subclass.definition.displayProperties.name}
            </label>
            <div className='flex flex-row align-middle'>
              <label className='text-sm text-muted text-sky-200 antialiased'>
                {subclass.definition.itemTypeDisplayName}
              </label>
            </div>
          </div>
          <div className='flex w-full flex-row flex-wrap'>
            {subclassPerks.slice(0, 11).map((socket, index) => {
              return (
                <div
                  key={index}
                  className='me-2 flex flex-row gap-1 opacity-85 hover:opacity-100'
                >
                  <div className='relative h-4 w-4'>
                    <Image
                      fill
                      alt='potato'
                      style={{ objectFit: 'contain' }}
                      src={`${ROOT_PATH}${socket.definition.displayProperties.icon}`}
                      className='rounded-md'
                    />
                  </div>
                  <label className='text-xs'>
                    {socket.definition.displayProperties.name}
                  </label>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* End Subclass */}
      {equipments
        ?.filter(equipment =>
          [3520001075, 2673424576, 715326750].includes(
            equipment.definition?.summaryItemHash ?? 0
          )
        )
        .slice(0, 8)
        .map((equipment, index) => (
          <div key={index} className='mb-3 flex flex-row gap-2 px-4'>
            <EquipmentCard equipment={equipment} />
          </div>
        ))}
    </div>
  )
}

function EquipmentCard({ equipment }: { equipment: EquipmentWithDefinitions }) {
  const { definition, itemInstanceId } = equipment
  const { displayProperties, itemTypeDisplayName } = definition

  return (
    <div className='flex items-center gap-4 border-b border-amber-300/75 pb-3'>
      <div className='flex flex-col'>
        <div className='flex gap-4'>
          <div className='relative h-14 w-14'>
            <Image
              priority
              src={`${ROOT_PATH}${displayProperties.icon}`}
              alt={displayProperties.name}
              fill
              style={{ objectFit: 'contain' }}
              className='rounded-lg'
            />
          </div>
          <div className='flex flex-col justify-center text-sky-100'>
            <h3 className='-mb-0.5 text-lg font-semibold antialiased'>
              {displayProperties.name}
            </h3>
            <span className='text-sm text-slate-400 antialiased'>
              {itemTypeDisplayName}
            </span>
          </div>
        </div>
        {itemInstanceId && (
          <div className='ml-[72px] flex flex-col justify-center text-sky-100'>
            <PerksRow itemInstanceId={itemInstanceId} />
          </div>
        )}
      </div>
    </div>
  )
}
