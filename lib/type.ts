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

export type ActivityStat = {
  period: string
  activityDetails: ActivityDetail
  values: AggregateActivityStatsValue
  definition: ActivityDefinition
}
