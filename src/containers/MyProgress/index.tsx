import { getMyProgress } from '@app/api'
import CircleProgress from '@app/components/CircleProgress'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

const featuredImage = 'https://api.lorem.space/image/drink?w=400&h=400'

const MyProgress: FC<{
  className?: string
}> = ({ className }) => {
  const { progressPercent: percent } = getMyProgress()

  return (
    <div className={classNames(className, 'relative flex-center font-body')}>
      <ProgressWrapper className="relative flex-center items-center">
        <CircleProgress className="h-full aspect-square absolute w-full z-1" percent={percent} />
        <p className="relative z-1">
          <Today>{dayjs().format('MM/DD')}</Today>
          <Percent className="ml-1">{percent}%</Percent>
        </p>
      </ProgressWrapper>
      <img className="block w-full h-full absolute top-0 left-0 object-cover" src={featuredImage} />
    </div>
  )
}

const Today = styled.span`
  font-size: 18px;
  line-height: 22px;
  text-shadow: 0px 0px 6px #FC7400;
`

const Percent = styled.span`
  font-size: 25px;
  line-height: 30px;
  text-shadow: 0px 0px 6px #FCA500;
`

const ProgressWrapper = styled.div`
  width: 181px;
  height: 181px;
  --glow-color: #FC7400;
`

export default MyProgress
