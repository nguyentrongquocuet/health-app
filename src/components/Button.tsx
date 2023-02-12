import classNames from 'classnames'
import { FC } from 'react'
import styled from 'styled-components'

const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <StyledButton {...props} className={classNames(props.className, 'text-center bg-gradient rounded-md')}>
      {props.children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  font-size: 18px;
  line-height: 26px;
  padding: 14px 72px 16px 72px;
`

export default Button
