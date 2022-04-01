export type CardProps = {
  name: string
  pledgePrice: number
  description: string
  daysLeft: number
  outOfStock?: boolean
}

export interface CardContent extends CardProps {}

export interface BackThisProjectModalCardProps extends CardContent {
  noReward?: boolean
}
