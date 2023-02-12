import { getMyExercises } from '@app/api'
import classNames from 'classnames'
import { FC } from 'react'
import styled from 'styled-components'

import ExerciseList from './components/ExerciseList'

const MyExercise: FC<{
  className?: string
  id?: string
}> = ({ className, id }) => {
  return (
    <Wrapper id={id} className={classNames(className, 'bg-dark-500')}>
      <div className="mb-1 flex uppercase font-body">
        <Heading>My exercise</Heading>
        <RecordDate>2021.05.21</RecordDate>
      </div>
      <ExerciseList exercises={getMyExercises()} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 16px 26px 16px 24px;
`

const Heading = styled.h5`
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.15px;
  width: 96px;
`

const RecordDate = styled.h4`
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.11px;
`

export default MyExercise
