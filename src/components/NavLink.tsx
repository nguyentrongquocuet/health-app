import classNames from 'classnames'
import { FC } from 'react'
import { NavLink as BaseNavLink, NavLinkProps } from 'react-router-dom'

const NavLink: FC<Omit<NavLinkProps, 'className'> & { className?: string }> = (props) => {
  return (
    <BaseNavLink {...props} className={({ isActive }) => classNames(props.className, isActive ? 'text-primary-300' : '')}>
      {props.children}
    </BaseNavLink>
  )
}

export default NavLink
