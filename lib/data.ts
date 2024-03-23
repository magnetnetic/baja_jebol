import { unstable_noStore as noStore } from 'next/cache'
import {
  DEF_ACTIVITY,
  DEF_DAMAGE_TYPE,
  DEF_INVENTORY_ITEM,
  DEF_STAT
} from './definitions/entity'
import {
  ActivityDefinition,
  ActivityHistory,
  AggregateActivityStats,
  AggregateActivityStatsList,
  Equipment,
  ItemSocket,
  ItemStat
} from './type'

export const ROOT_PATH = 'https://www.bungie.net'
const API_KEY = process.env.X_API_KEY as string
const PROFILE_PATH =
  '/Platform/Destiny2/3/Profile/4611686018468068912/?components=200'
const ACTIVITY_PATH =
  '/Platform/Destiny2/3/Account/4611686018468068912/Character/2305843009344565737/Stats/Activities/?page=0&count=10'
const AGGREGATE_ACTIVITY_PATH =
  '/Platform/Destiny2/3/Account/4611686018468068912/Character/2305843009344565737/Stats/AggregateActivityStats/'
export const GET_CHARACTER_EQUIPMENT_TITAN =
  '/Platform/Destiny2/3/Profile/4611686018468068912/Character/2305843009344565737/?components=205'
export const GET_CHARACTER_EQUIPMENT_HUNTER =
  '/Platform/Destiny2/3/Profile/4611686018468068912/Character/2305843009351224217/?components=205'
export const GET_CHARACTER_EQUIPMENT_WARLOCK =
  '/Platform/Destiny2/3/Profile/4611686018468068912/Character/2305843009417074253/?components=205'
export const GET_HISTORICAL_STATS =
  '/Platform/Destiny2/3/Account/4611686018468068912/Stats/?groups=1'
export const GET_ITEM_SOCKET = (itemInstanceId: string) => {
  return `/Platform/Destiny2/3/Profile/4611686018468068912/Item/${itemInstanceId}/?components=305`
}
export const GET_ITEM_STATS = (itemInstanceId: string) => {
  return `/Platform/Destiny2/3/Profile/4611686018468068912/Item/${itemInstanceId}/?components=304`
}
export const GET_ITEM_COMMON_DATA = (itemInstanceId: string) => {
  return `/Platform/Destiny2/3/Profile/4611686018468068912/Item/${itemInstanceId}/?components=307`
}

async function fetchData(path: string) {
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

export const fetchCharacterList = () => fetchData(PROFILE_PATH)
export const fetchActivityHistory = () => fetchData(ACTIVITY_PATH)
export const fetchAggregateActivityStats = () =>
  fetchData(AGGREGATE_ACTIVITY_PATH)

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

export async function fetchActivityHistoryWithDefinitions() {
  noStore()
  const activityHistory = await fetchActivityHistory()

  const activitiesWithDefinitions = await Promise.all(
    activityHistory.activities.map(async (activity: ActivityHistory) => {
      const activityDefinition = await fetchEntityDefinition(
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

// CHARACTER DATA

export async function fetchCharacterEquipment(character_endpoint: string) {
  noStore()
  const equipments = await fetchData(character_endpoint)

  return equipments.equipment.data.items
}

export async function fetchItemSockets(itemInstanceId: string) {
  const itemSockets = await fetchData(GET_ITEM_SOCKET(itemInstanceId))
  return itemSockets.sockets.data.sockets
}

export async function fetchItemCommonData(itemInstanceId: string) {
  const itemCommonData = await fetchData(GET_ITEM_COMMON_DATA(itemInstanceId))
  return itemCommonData.item.data
}

export async function fetchItemStats(itemInstanceId: string) {
  const itemStats = await fetchData(GET_ITEM_STATS(itemInstanceId))

  const statsArray: ItemStat[] = Object.values(itemStats.stats.data.stats)
  const itemStatsWithDefinitions = await Promise.all(
    statsArray.map(async (stat: ItemStat) => {
      const statDef = await fetchEntityDefinition(DEF_STAT, stat.statHash)

      return {
        ...stat,
        definition: statDef
      }
    })
  )
  return itemStatsWithDefinitions
}

export async function fetchHistoricalStats() {
  const historicalStats = await fetchData(GET_HISTORICAL_STATS)

  return historicalStats
}
