import { fetchEntityDefinition } from '../data'
import { ActivityDefinition } from '../type'
import { DEF_ACTIVITY } from './entity'

export const LAST_WISH_HASH = 2122313384
export const GARDEN_HASH = 1042180643
export const DEEP_STONE_HASH = 910380154
export const VAULT_OF_GLASS_HASH = 3881495763
export const VOW_DISCIPLE_HASH = 1441982566
export const KINGS_FALL_HASH = 1374392663
export const ROOT_OF_NIGHTMARES_HASH = 2381413764
export const CROTAS_END_HASH = 4179289725

export async function getEntityDefinition(
  entityType: string,
  entityId: number
): Promise<ActivityDefinition> {
  const data: ActivityDefinition = await fetchEntityDefinition(
    entityType,
    entityId
  )
  return data
}

export const getLastWishDefinition = () =>
  getEntityDefinition(DEF_ACTIVITY, LAST_WISH_HASH)

export const getGardenOfSalvationDefinition = () =>
  getEntityDefinition(DEF_ACTIVITY, GARDEN_HASH)

export const getDeepStoneCryptDefinition = () =>
  getEntityDefinition(DEF_ACTIVITY, DEEP_STONE_HASH)

export const getVaultOfGlassDefinition = () =>
  getEntityDefinition(DEF_ACTIVITY, VAULT_OF_GLASS_HASH)

export const getVowOfDiscipleDefinition = () =>
  getEntityDefinition(DEF_ACTIVITY, VOW_DISCIPLE_HASH)

export const getKingsFallDefinition = () =>
  getEntityDefinition(DEF_ACTIVITY, KINGS_FALL_HASH)

export const getRootOfNightmareDefinition = () =>
  getEntityDefinition(DEF_ACTIVITY, ROOT_OF_NIGHTMARES_HASH)

export const getCrotasEndDefinition = () =>
  getEntityDefinition(DEF_ACTIVITY, CROTAS_END_HASH)
