/**
 * Special thanks to who made this pen: `https://codepen.io/vagusX/pen/VPmJqx`
 */
import { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

const RADIUS = 88

/**
 * Circuit of circle
 */
const CIRCUIT = RADIUS * Math.PI * 2

const getDashOffset = (percent: number) => {
  return (1 - percent / 100) * CIRCUIT
}

const CircleProgress: FC<HTMLAttributes<HTMLSpanElement> & { percent: number }> = ({ percent, ...spanProps }) => {
  const dashOffset = getDashOffset(percent)

  return (
    <Wrapper {...spanProps}>
      <StyledSVG viewBox="0 0 181 181" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="dropshadow" x="-40%" y="-40%" width="180%" height="180%" filterUnits="userSpaceOnUse">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            <feOffset dx="6" dy="6" result="offsetblur" />
            <feOffset dx="-6" dy="-6" result="offsetblur" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle style={{ strokeDashoffset: dashOffset, filter: 'url(#dropshadow)', stroke: 'var(--glow-color)' }} cx="91" cy="91" r={RADIUS} fill="none" />
        <circle style={{ strokeDashoffset: dashOffset }} cx="91" cy="91" r={RADIUS} fill="none" />
      </StyledSVG>
    </Wrapper>
  )
}

const Wrapper = styled.span`
  display: block;
  transform: rotate(-90deg);
`

const StyledSVG = styled.svg`
  display: block;
  overflow: visible;

  circle {
    stroke-width: 2px;
    stroke-dasharray: ${CIRCUIT};
    stroke-dashoffset: ${CIRCUIT};
    stroke: currentColor;
    transition: stroke-dashoffset .3s ease-in-out;
  }
`

export default CircleProgress
