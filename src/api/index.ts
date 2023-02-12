import faker from '@app/libs/faker'

import { EMealTime, IExercise, IMealHistoryItem } from './types'

let i = 0
const newId = () => `${i++}`

const createMealsForADay = (date: Date): IMealHistoryItem[] => {
  return [
    {
      featured_image: 'https://api.lorem.space/image/burger?w=400&h=400',
      date: date.toString(),
      id: newId(),
      meal_time: EMealTime.Morning,
      note: `Meal number ${i}`,
    },
    {
      featured_image: 'https://api.lorem.space/image/pizza?w=400&h=400',
      date: date.toString(),
      id: newId(),
      meal_time: EMealTime.Lunch,
      note: `Meal number ${i}`,
    },
    {
      featured_image: 'https://api.lorem.space/image/drink?w=400&h=400',
      date: date.toString(),
      id: newId(),
      meal_time: EMealTime.Dinner,
      note: `Meal number ${i}`,
    },
    {
      featured_image: 'https://api.lorem.space/image/movie?w=400&h=400',
      date: date.toString(),
      id: newId(),
      meal_time: EMealTime.Snack,
      note: `Meal number ${i}`,
    },
  ]
}

export const getMealHistory = (): IMealHistoryItem[] => {
  return [...createMealsForADay(new Date()), ...createMealsForADay(new Date(Date.now() - 25 * 60 * 60 * 1000))]
}

export const getMyExercises = (): IExercise[] => {
  return new Array(40).fill(0).map((_) => ({
    id: newId(),
    kcal: faker.datatype.number({ min: 10, max: 20 }),
    timeAmountSeconds: faker.datatype.number({ min: 600, max: 1000 }),
    title: faker.lorem.sentence(5),
  }))
}
