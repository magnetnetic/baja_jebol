import { fetchPerkIcon, fetchWeapon } from '@/lib/data'
import FormGame from './form-game'

export default async function Weapon() {
  const weapon = await fetchWeapon()
  const perk = await fetchPerkIcon(
    weapon.sockets.socketEntries[0].singleInitialItemHash
  )
  console.log(weapon.displayProperties.name)
  return (
    <section id='weapon' className='container'>
      <FormGame egg={perk} weapon={weapon} />
    </section>
  )
}
