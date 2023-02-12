import { IExercise } from '@app/api/types'
import { FC } from 'react'
import styled from 'styled-components'

import Exercise from './Exercise'

const ExerciseList: FC<{
  exercises: IExercise[]
}> = ({ exercises }) => {
  return (
    <ExerciseListWrapper className="overflow-y-auto grid grid-cols-2 gap-x-10 pr-6">
      {exercises.map(({ id, kcal, timeAmountSeconds, title }) => (
        <Exercise key={id} kcal={kcal} timeAmountSeconds={timeAmountSeconds} title={title} />
      ))}
    </ExerciseListWrapper>
  )
}

const ExerciseListWrapper = styled.div`
  height: 192px;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 3px;
    background-color: #777777;
  }

  &::-webkit-scrollbar-thumb {
    width: 6px;
    border-radius: 3px;
    background-color: #FFCC21;
  }
`

export default ExerciseList
