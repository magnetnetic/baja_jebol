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

export type ItemDefinition = {
  displayProperties: {
    name: string
    icon: string
  }
  screenshot: string
  itemTypeDisplayName: string
  flavorText: string
  itemTypeAndTierDisplayName: string
  summaryItemHash: number
  defaultDamageType: number
  defaultDamageTypeHash: number
}

export type Item = {
  itemHash: number
  itemInstanceId: string
  bucketHash: number
  state: number
}

export type ItemStat = Item & {
  definition: ItemDefinition
  damageTypeDefinition: DamageTypeDefinition
}

export type DamageTypeDefinition = {
  displayProperties: {
    description: string
    name: string
    icon: string
  }
  transparentIconPath: string
}
