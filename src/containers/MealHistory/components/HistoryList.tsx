import { EMealTime, IMealHistoryItem } from '@app/api/types'
import logo from '@app/assets/logo.svg'
import { formatDate } from '@app/helpers/date-time'
import { FC, memo, useMemo } from 'react'
import styled from 'styled-components'

const HistoryList: FC<{
  items: IMealHistoryItem[]
}> = ({ items }) => {
  return (
    <div className="grid grid-cols-4 gap-2 font-body meal-history-list">
      {items.map((meal) => (
        <Meal key={meal.id} {...meal}></Meal>
      ))}
    </div>
  )
}

const mealLabelMap = {
  [EMealTime.Dinner]: 'Dinner',
  [EMealTime.Lunch]: 'Lunch',
  [EMealTime.Morning]: 'Morning',
  [EMealTime.Snack]: 'Snack',
}

const getTagContent = (dateStr: string, mealTime: EMealTime) => {
  return formatDate(dateStr, 'MM.DD') + `.${mealLabelMap[mealTime]}`
}

const Meal: FC<IMealHistoryItem> = ({ date, featuredImage, mealTime, note }) => {
  const tagContent = useMemo(() => getTagContent(date, mealTime), [mealTime, date])

  return (
    <div className="relative aspect-square">
      <StyledImg className="w-full h-full aspect-square object-cover block bg-no-repeat bg-center" alt={note} src={featuredImage} />
      <Tag className="bg-primary-300 absolute left-0 bottom-0">{tagContent}</Tag>
    </div>
  )
}

const StyledImg = styled.img`
  background-image: url("${logo}");
`

const Tag = styled.span`
  padding: 7px 10px 7px 8px;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.15px;
`

export default memo(HistoryList)
