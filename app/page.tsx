import About from '@/components/sections/about/about'
import Char from '@/components/sections/char/char'
import Hero from '@/components/sections/hero/hero'
import Nav from '@/components/ui/nav'
import { fetchHistoricalStats } from '@/lib/data'
import React, { Suspense } from 'react'

export default async function Home() {
  const historicalStats = await fetchHistoricalStats()
  return (
    <div>
      <Nav
        PvPDeaths={
          historicalStats.mergedAllCharacters.results.allPvP.allTime.deaths
            .basic.displayValue
        }
        PvEDeaths={
          historicalStats.mergedAllCharacters.results.allPvE.allTime.deaths
            .basic.displayValue
        }
        PvPSudoku={
          historicalStats.mergedAllCharacters.results.allPvP.allTime.suicides
            .basic.displayValue
        }
        PvESudoku={
          historicalStats.mergedAllCharacters.results.allPvE.allTime.suicides
            .basic.displayValue
        }
      />
      <Hero />
      <Suspense fallback={<p>.......</p>}>
        <About />
      </Suspense>
      <Suspense>
        <Char />
      </Suspense>
    </div>
  )
}
