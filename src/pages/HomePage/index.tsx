import MealHistory from '@app/containers/MealHistory'
import MyProgress from '@app/containers/MyProgress'
import { FC } from 'react'
import styled from 'styled-components'

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <MealHistory />
    </>
  )
}

const Hero = () => (
  <HeroWrapper className="flex bg-dark-600">
    <StyledMyProgress className="h-full shrink-0" />
  </HeroWrapper>
)

const StyledMyProgress = styled(MyProgress)`
  width: 540px;
`

const HeroWrapper = styled.div`
  height: 312px;
`

export default HomePage
