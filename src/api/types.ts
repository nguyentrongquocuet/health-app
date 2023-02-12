export const enum EMealTime {
  Morning = 'Morning',
  Lunch = 'Lunch',
  Dinner = 'Dinner',
  Snack = 'Snack',
}

export interface IMealHistoryItem {
  meal_time: EMealTime
  date: string
  id: string
  featured_image: string
  note?: string
}

export interface IExercise {
  id: string
  title: string
  timeAmountSeconds: number
  kcal: number
}
