import styled from 'styled-components'

import { Wrapper as DiaryWrapper } from './DiarySummary'

const Skeleton = () => (
  <Wrapper className="grid grid-cols-4 gap-3 diary-skeleton">
    {new Array(8).fill(0).map((_, idx) => (
      <DiaryWrapper key={idx} className="aspect-square text-dark-500 border-2 border-gray-500 animate-pulse" />
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
`

export default Skeleton
