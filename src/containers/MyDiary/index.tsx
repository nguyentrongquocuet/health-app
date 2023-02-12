import { getMyDiariesSummary } from '@app/api'
import Button from '@app/components/Button'
import { FC } from 'react'
import styled from 'styled-components'

import DiarySummaryList from './components/DiarySummaryList'

const MyDiary: FC<{
  className?: string
  id?: string
}> = ({ className, id }) => {
  return (
    <section id={id} className={className}>
      <Heading className="text-dark-500 h-8 font-body">MY DIARY</Heading>
      <DiarySummaryList items={getMyDiariesSummary()} />
      <div className="text-center">
        <LoadMoreBtn>自分の日記をもっと見る</LoadMoreBtn>
      </div>
    </section>
  )
}

const LoadMoreBtn = styled(Button)`
  margin-top: 30px;
`

const Heading = styled.h4`
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.11px;
`

export default MyDiary
