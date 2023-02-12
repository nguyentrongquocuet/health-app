import { formatDate } from '@app/helpers/date-time'
import classNames from 'classnames'
import { FC } from 'react'
import styled from 'styled-components'

import BodyRecordChart from './Chart'

const BodyRecords: FC<{
  className?: string
  id?: string
}> = ({ className, id }) => {
  return (
    <Wrapper id={id} className={classNames(className, 'bg-dark-500 py-4 px-6 flex flex-col')}>
      <div className="mb-1 flex font-body uppercase">
        <Heading>Body record</Heading>
        <RecordDate>{formatDate(Date.now(), 'YYYY.MM.DD')}</RecordDate>
      </div>
      <div className="h-full px-3">
        <BodyRecordChart />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 304px;
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

export default BodyRecords
