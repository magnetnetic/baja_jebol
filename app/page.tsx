import About from '@/components/sections/about/about'
import Char from '@/components/sections/char/char'
import Hero from '@/components/sections/hero/hero'
import Nav from '@/components/ui/nav'
import { fetchActivityDataWithDefinitions } from '@/lib/data'
import {
  CROTAS_END_HASH,
  DEEP_STONE_HASH,
  GARDEN_HASH,
  KINGS_FALL_HASH,
  LAST_WISH_HASH,
  ROOT_OF_NIGHTMARES_HASH,
  VAULT_OF_GLASS_HASH,
  VOW_DISCIPLE_HASH
} from '@/lib/definitions/raid'
import { RaidStat } from '@/lib/type'
import React from 'react'

const raidDefinitionHashes = [
  LAST_WISH_HASH,
  ROOT_OF_NIGHTMARES_HASH,
  GARDEN_HASH,
  DEEP_STONE_HASH,
  VAULT_OF_GLASS_HASH,
  VOW_DISCIPLE_HASH,
  KINGS_FALL_HASH,
  CROTAS_END_HASH
]

export default async function Home() {
  const raidStats: RaidStat[] =
    await fetchActivityDataWithDefinitions(raidDefinitionHashes)

  return (
    <div>
      <Nav />
      <Hero />
      <About raidStats={raidStats} />
      <Char />
    </div>
  )
}
