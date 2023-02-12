import { IDiarySummary } from '@app/api/types'
import { formatDate } from '@app/helpers/date-time'
import { FC } from 'react'
import styled from 'styled-components'

const DiarySummary: FC<Omit<IDiarySummary, 'id'>> = ({ content, date, title }) => {
  const day = formatDate(date, 'YYYY.MM.DD')
  const time = formatDate(date, 'HH:mm')

  return (
    <Wrapper className="aspect-square text-dark-500 border-2 border-gray-500">
      <Header className="font-body pb-1">
        <span>{day}</span>
        <br />
        <span>{time}</span>
      </Header>
      <Body className="mt-2">
        <p className="line-clamp-2">{title}</p>
        <p className="line-clamp-5">{content}</p>
      </Body>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  padding: 14px 13px 25px 14px;
`

const Body = styled.div`
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.06px;
`

const Header = styled.p`
  font-size: 18px;
  line-height: 22px;
`

export default DiarySummary
