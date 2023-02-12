import { FC, HTMLAttributes } from 'react'

/**
 *
 */
const ButtonLikeBox: FC<
  HTMLAttributes<HTMLDivElement> & {
    stopPropagationOnClick?: boolean
    disabled?: boolean
    onHitEnter?: (e: React.KeyboardEvent<HTMLDivElement>) => void
  }
> = ({ onHitEnter, stopPropagationOnClick, ...props }) => {
  return (
    <div
      onKeyUp={(e) => {
        if (props.disabled) {
          return
        }

        if (stopPropagationOnClick) {
          e.preventDefault()
          e.stopPropagation()
        }

        if (e.key == 'Enter') {
          onHitEnter?.(e)
        }
      }}
      tabIndex={props.disabled ? -1 : 0}
      {...props}
    >
      {props.children}
    </div>
  )
}

export default ButtonLikeBox
