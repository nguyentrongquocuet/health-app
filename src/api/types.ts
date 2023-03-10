export const enum EMealTime {
  Morning = 'Morning',
  Lunch = 'Lunch',
  Dinner = 'Dinner',
  Snack = 'Snack',
}

export interface IMealHistoryItem {
  mealTime: EMealTime
  date: string
  id: string
  featuredImage: string
  note?: string
}

export interface IExercise {
  id: string
  title: string
  timeAmountSeconds: number
  kcal: number
}

export interface IDiarySummary {
  id: string
  date: string
  title: string
  content: string
}

export interface IRecommendedPost {
  /**
   * 8:13 img
   */
  figure: string
  summary: string
  date: string
  hashtags: string[]
  id: string
}

export interface IMyProgress {
  progressPercent: number
}
