import MainBMIGraph from '@app/containers/MainGraph'
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
    <GraphContainer className="flex">
      <MainBMIGraph />
    </GraphContainer>
  </HeroWrapper>
)

const HeroWrapper = styled.div`
  height: 312px;
`

const GraphContainer = styled.div`
  margin-left: 44px;
  width: 632px;
`

const StyledMyProgress = styled(MyProgress)`
  width: 540px;
`

export default HomePage
