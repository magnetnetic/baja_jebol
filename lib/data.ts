import { unstable_noStore as noStore } from 'next/cache'
import { DEF_ACTIVITY } from './definitions/entity'
import {
  ActivityDefinition,
  ActivityHistory,
  AggregateActivityStats,
  AggregateActivityStatsList
} from './type'

export const ROOT_PATH = 'https://www.bungie.net'
const API_KEY = 'fb4d7364a9af4ac0a2bdd12d69ae72b1'
const PROFILE_PATH =
  '/Platform/Destiny2/3/Profile/4611686018468068912/?components=200'
const ACTIVITY_PATH =
  '/Platform/Destiny2/3/Account/4611686018468068912/Character/2305843009344565737/Stats/Activities/?page=0&count=10'
const AGGREGATE_ACTIVITY_PATH =
  '/Platform/Destiny2/3/Account/4611686018468068912/Character/2305843009344565737/Stats/AggregateActivityStats/'

if (!API_KEY) {
  throw new Error('API_KEY is not defined')
}

async function fetchData(path: string) {
  noStore()
  const headers = new Headers()
  headers.append('x-api-key', API_KEY)

  try {
    const response = await fetch(`${ROOT_PATH}${path}`, { headers })
    const data = await response.json()
    return data.Response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const fetchCharacterList = () => fetchData(PROFILE_PATH)
export const fetchActivityHistory = () => fetchData(ACTIVITY_PATH)
export const fetchAggregateActivityStats = () =>
  fetchData(AGGREGATE_ACTIVITY_PATH)

export async function fetchEntityDefinition(
  entityType: string,
  hashIdentifier: number
) {
  try {
    const res = await fetch(
      `${ROOT_PATH}/Platform/Destiny2/Manifest/${entityType}/${hashIdentifier}/`,
      { headers: { 'x-api-key': API_KEY } }
    )
    const data = await res.json()

    return data.Response
  } catch (error) {
    console.error(error)
    throw error
  }
}

// RAID DATA

export const fetchRaidDataWithDefinitions = async (
  activityHashesToFetch: number[]
) => {
  const filteredActivityStats = await fetchFilteredRaidStats(
    activityHashesToFetch
  )

  const activitiesWithDefinitions = await Promise.all(
    filteredActivityStats.map(async (activityStat: AggregateActivityStats) => {
      const activityDefinition: ActivityDefinition =
        await fetchEntityDefinition(DEF_ACTIVITY, activityStat.activityHash)

      return {
        ...activityStat,
        definition: activityDefinition
      }
    })
  )

  return activitiesWithDefinitions
}

export const fetchFilteredRaidStats = async (
  activityHashesToFetch: number[]
) => {
  const aggregateActivityStats: AggregateActivityStatsList =
    await fetchAggregateActivityStats()

  const filteredActivityStats = aggregateActivityStats.activities.filter(
    activityStat => activityHashesToFetch.includes(activityStat.activityHash)
  )

  return filteredActivityStats
}

// ACTIVITY HISTORY DATA

export const fetchActivityHistoryWithDefinitions = async () => {
  const activityHistory = await fetchActivityHistory()

  const activitiesWithDefinitions = await Promise.all(
    activityHistory.activities.map(async (activity: ActivityHistory) => {
      const activityDefinition: ActivityDefinition =
        await fetchEntityDefinition(
          DEF_ACTIVITY,
          activity.activityDetails.directorActivityHash
        )

      return {
        ...activity,
        definition: activityDefinition
      }
    })
  )

  return activitiesWithDefinitions
}
