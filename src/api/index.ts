import faker from '@app/libs/faker'

import { EMealTime, IDiarySummary, IExercise, IMealHistoryItem, IMyProgress, IRecommendedPost } from './types'

let i = 0
const newId = () => `${i++}`

const createMealsForADay = (date: Date): IMealHistoryItem[] => {
  return [
    {
      featured_image: faker.image.food(400, 400, true),
      date: date.toString(),
      id: newId(),
      meal_time: EMealTime.Morning,
      note: `Meal number ${i}`,
    },
    {
      featured_image: faker.image.food(400, 400, true),
      date: date.toString(),
      id: newId(),
      meal_time: EMealTime.Lunch,
      note: `Meal number ${i}`,
    },
    {
      featured_image: faker.image.food(400, 400, true),
      date: date.toString(),
      id: newId(),
      meal_time: EMealTime.Dinner,
      note: `Meal number ${i}`,
    },
    {
      featured_image: faker.image.food(400, 400, true),
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

export const getMyDiariesSummary = (): IDiarySummary[] => {
  return new Array(8).fill(0).map((_) => ({
    id: newId(),
    content: faker.lorem.sentence(30),
    date: faker.date.past().toString(),
    title: faker.lorem.sentence(5),
  }))
}

export const getRecommendedPosts = (): IRecommendedPost[] => {
  return new Array(8).fill(0).map((_) => ({
    date: faker.date.past().toString(),
    figure: faker.image.food(400, 400, true),
    hashtags: faker.helpers.uniqueArray(() => faker.lorem.word(), 3),
    id: newId(),
    summary: faker.lorem.paragraph(3),
  }))
}

export const getMyProgress = (): IMyProgress => {
  return {
    progressPercent: 75,
  }
}
