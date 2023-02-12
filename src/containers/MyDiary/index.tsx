import { getMyDiariesSummary } from '@app/api'
import Button from '@app/components/Button'
import useFakeFetch from '@app/hooks/useFakeFetch'
import { FC } from 'react'
import styled from 'styled-components'

import DiarySummaryList from './components/DiarySummaryList'
import Skeleton from './components/Skeleton'

const MyDiary: FC<{
  className?: string
  id?: string
}> = ({ className, id }) => {
  const { data, isLoading, refetch } = useFakeFetch(getMyDiariesSummary, [])

  const triggerLoadMore = () => {
    if (isLoading) {
      return
    }

    refetch([data.length + 8])
  }

  return (
    <section id={id} className={className}>
      <Heading className="text-dark-500 h-8 font-body">MY DIARY</Heading>
      {data && <DiarySummaryList items={data} />}
      {isLoading && <Skeleton />}
      <div className="text-center">
        <LoadMoreBtn onClick={triggerLoadMore}>自分の日記をもっと見る</LoadMoreBtn>
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
