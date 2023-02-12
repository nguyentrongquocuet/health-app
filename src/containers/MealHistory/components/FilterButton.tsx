import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const FilterButton: FC<{
  /**
   * Expected a 56x56 icon
   */
  icon: ReactNode
  label: string
  onClick?: () => void
}> = ({ icon, label, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Hexagon className="bg-gradient text-center flex-center flex-col">
        {icon}
        <Text>{label}</Text>
      </Hexagon>
    </Container>
  )
}

const Container = styled.button`
  width: 134px;
  height: 134px;
  padding: 1px 10px;
`

const Hexagon = styled.div`
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  height: 100%;
`

const Text = styled.span`
  font-size: 20px;
  line-height: 24px;
`

export default FilterButton
