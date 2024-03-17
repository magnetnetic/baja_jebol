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
}

export type ItemSocket = {
  plugHash?: number
  isEnabled: boolean
  isVisible: boolean
}

export type itemSocketsWithDefinitions = ItemSocket & {
  definition: InventoryItemDefinition
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
