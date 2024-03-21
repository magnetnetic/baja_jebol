export type ActivityHistory = {
  period: string
  activityDetails: ActivityDetail
}

export type ActivityDetail = {
  referenceId: number
  directorActivityHash: number
  instanceId: string
}

export type AggregateActivityStatsList = {
  activities: AggregateActivityStats[]
}

export type AggregateActivityStats = {
  activityHash: number
  values: AggregateActivityStatsValue
}

export type AggregateActivityStatsValue = {
  activityCompletions: {
    statId: string
    basic: {
      value: number
      displayValue: string
    }
  }
}

export type ActivityDefinition = {
  displayProperties: {
    description: string
    name: string
    icon: string
  }
  pgcrImage: string
}

export type RaidStat = {
  activityHash: number
  values: AggregateActivityStatsValue
  definition: ActivityDefinition
}

export type ActivityStat = ActivityHistory & {
  values: AggregateActivityStatsValue
  definition: ActivityDefinition
}

export type InventoryItemDefinition = {
  displayProperties: {
    name: string
    icon: string
    description: string
  }
  itemTypeDisplayName: string
  flavorText: string
  itemTypeAndTierDisplayName: string
  summaryItemHash?: number
  defaultDamageType?: number
  defaultDamageTypeHash?: number
  secondaryIcon?: string
  screenshot?: string
  perks: Perk[]
}

export type Perk = {
  requirementDisplayString: string
  perkHash: number
}

export type SandboxPerkDefinition = {
  displayProperties: {
    description: string
    name: string
    icon: string
    hasIcon: boolean
  }
  isDisplayable: boolean
  hash: number
  index: number
}

export type StatDefinition = {
  displayProperties: {
    description: string
    name: string
    hasIcon: boolean
  }
}

export type ItemSocket = {
  plugHash?: number
  isEnabled: boolean
  isVisible: boolean
}

export type ItemCommonData = {
  itemHash: number
  itemInstanceId: string
  quantity: number
  bucketHash: number
  state: number
  overrideStyleItemHash?: number
}

export type ItemSocketsWithDefinitions = ItemSocket & {
  definition: InventoryItemDefinition
}

export type ItemStat = {
  statHash: number
  value: number
}

export type ItemStatsWithDefinitions = ItemStat & {
  definition: StatDefinition
}

export type Equipment = {
  itemHash: number
  itemInstanceId: string
  quantity: number
  bucketHash: number
}

export type Equipments = {
  equipments: Equipment[]
}

export type DamageTypeDefinition = {
  displayProperties: {
    description: string
    name: string
    icon: string
  }
  transparentIconPath: string
}

export type EquipmentWithDefinitions = Equipment & {
  definition: InventoryItemDefinition
  damageTypeDefinition: DamageTypeDefinition
}
