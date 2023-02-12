import { IExercise } from '@app/api/types'
import { FC } from 'react'
import styled from 'styled-components'

const Exercise: FC<Omit<IExercise, 'id'>> = ({ kcal, timeAmountSeconds, title }) => {
  return (
    <div className="pt-2 pr-3 border-b border-b-gray-400">
      <div className="flex items-center">
        <Dot>●</Dot>
        <ExerciseTitle className="ml-3 line-clamp-1 max-w-[60%]">家事全般（立位・軽い）</ExerciseTitle>
        <ExerciseTime className="ml-auto text-primary-300 font-body">10 min</ExerciseTime>
      </div>
      <Calory className="font-body ml-4 text-primary-300">26kcal</Calory>
    </div>
  )
}

const ExerciseTime = styled.span`
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.09px;
`

const Dot = styled.span`
  font-size: 5px;
  line-height: 7px;
`

const Calory = styled.p`
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.08;
  margin-bottom: 2px;
  margin-top: -3px;
`

const ExerciseTitle = styled.span`
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.08;
`

export default Exercise
