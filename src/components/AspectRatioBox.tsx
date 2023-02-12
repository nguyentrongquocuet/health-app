import { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

type TAspectRatio = `${number}/${number}`

const AspectRatioBox: FC<
  HTMLAttributes<HTMLDivElement> & {
    aspectRatio: TAspectRatio
  }
> = ({ children, ...props }) => {
  return (
    <AspectRatioBoxWrapper {...props}>
      <div className="absolute w-full h-full top-0 left-0">{children}</div>
    </AspectRatioBoxWrapper>
  )
}

const getAspectRatioPadding = (ratio: TAspectRatio) => {
  const [w, h] = ratio.split('/')

  return `calc(100% / ${w} * ${h})`
}

const AspectRatioBoxWrapper = styled.div<{ aspectRatio: TAspectRatio }>`
  position: relative;
  padding-top: ${({ aspectRatio }) => getAspectRatioPadding(aspectRatio)}
`

export default AspectRatioBox
