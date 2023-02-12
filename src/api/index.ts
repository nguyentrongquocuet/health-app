import { timeoutPromisify } from '@app/helpers/functions'
import faker from '@app/libs/faker'
import dayjs from 'dayjs'

import { EMealTime, IDiarySummary, IExercise, IMealHistoryItem, IMyProgress, IRecommendedPost } from './types'

const getApiCallTime = () => faker.datatype.number({ min: 2000, max: 5000 })

let i = 0
const newId = () => `${i++}`

const createMealsForADay = (date: Date): IMealHistoryItem[] => {
  return [
    {
      featuredImage: faker.image.food(400, 400, true),
      date: date.toString(),
      id: newId(),
      mealTime: EMealTime.Morning,
      note: `Meal number ${i}`,
    },
    {
      featuredImage: faker.image.food(400, 400, true),
      date: date.toString(),
      id: newId(),
      mealTime: EMealTime.Lunch,
      note: `Meal number ${i}`,
    },
    {
      featuredImage: faker.image.food(400, 400, true),
      date: date.toString(),
      id: newId(),
      mealTime: EMealTime.Dinner,
      note: `Meal number ${i}`,
    },
    {
      featuredImage: faker.image.food(400, 400, true),
      date: date.toString(),
      id: newId(),
      mealTime: EMealTime.Snack,
      note: `Meal number ${i}`,
    },
  ]
}

const mealList = [EMealTime.Morning, EMealTime.Lunch, EMealTime.Dinner, EMealTime.Snack]

export const getMealHistory = timeoutPromisify((amount = 8): IMealHistoryItem[] => {
  return new Array(amount).fill(amount).map((_, idx) => {
    const mealTime = mealList[idx % 4]

    return {
      featured_image: faker.image.food(400, 400, true),
      date: faker.date.past().toString(),
      id: newId(),
      mealTime,
      featuredImage: faker.image.food(400, 400, true),
    }
  })
}, getApiCallTime)

export const getMyExercises = timeoutPromisify((): IExercise[] => {
  return new Array(40).fill(0).map((_) => ({
    id: newId(),
    kcal: faker.datatype.number({ min: 10, max: 20 }),
    timeAmountSeconds: faker.datatype.number({ min: 600, max: 1000 }),
    title: faker.lorem.sentence(5),
  }))
}, getApiCallTime)

export const getMyDiariesSummary = timeoutPromisify((amount = 8): IDiarySummary[] => {
  return new Array(amount).fill(0).map((_) => ({
    id: newId(),
    content: faker.lorem.sentence(30),
    date: faker.date.past().toString(),
    title: faker.lorem.sentence(5),
  }))
}, getApiCallTime)

export const getRecommendedPosts = timeoutPromisify((amount = 8): IRecommendedPost[] => {
  return new Array(amount).fill(0).map((_) => ({
    date: faker.date.past().toString(),
    figure: faker.image.food(400, 400, true),
    hashtags: faker.helpers.uniqueArray(() => faker.lorem.word(), 3),
    id: newId(),
    summary: faker.lorem.paragraph(3),
  }))
}, getApiCallTime)

export const getMyProgress = timeoutPromisify((): IMyProgress => {
  return {
    progressPercent: 75,
  }
}, getApiCallTime)

const makeChartSerie = (amountOfUnit: number, unit: dayjs.ManipulateType, endDate: number) => {
  const today = dayjs(endDate)

  return new Array(amountOfUnit)
    .fill(0)
    .map((_, idx) => {
      return [
        today.subtract(idx, unit).unix() * 1000,
        faker.datatype.number({
          min: 10,
          max: 20,
        }),
      ]
    })
    .reverse()
}

export const getMonthlyBMIChartData = timeoutPromisify((numOfMonths = 12) => {
  const now = Date.now()

  return [makeChartSerie(numOfMonths, 'month', now), makeChartSerie(numOfMonths, 'month', now)]
}, getApiCallTime)
