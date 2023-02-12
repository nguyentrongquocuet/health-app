import { ReactComponent as ChallengeIcon } from '@app/assets/icon_challenge.svg'
import { ReactComponent as CloseIcon } from '@app/assets/icon_close.svg'
import { ReactComponent as InfoIcon } from '@app/assets/icon_info.svg'
import { ReactComponent as InfoCountIcon } from '@app/assets/icon_info_count.svg'
import { ReactComponent as RecordIcon } from '@app/assets/icon_memo.svg'
import { ReactComponent as MenuIcon } from '@app/assets/icon_menu.svg'
import { ReactComponent as Logo } from '@app/assets/logo.svg'
import NavLink from '@app/components/NavLink'
import useClickOutside from '@app/hooks'
import { ROUTER_PATHS } from '@app/router/constant'
import { FC, memo, ReactNode, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <StyledHeader id="app-header" className="w-full bg-dark-500 z-10 sticky top-0 left-0">
      <nav className="h-16 app-container flex justify-between">
        <Link to={ROUTER_PATHS.Home}>
          <Logo />
        </Link>
        <NavItemList className="py-2 flex items-center">
          <NavItem to={ROUTER_PATHS.MyRecords}>
            <RecordIcon />
            <span>自分の記録</span>
          </NavItem>
          <NavItem>
            <ChallengeIcon />
            <span>チャレンジ</span>
          </NavItem>
          <NavItem>
            <CounterBadge counter={1}>
              <InfoIcon />
            </CounterBadge>
            <span>お知らせ</span>
          </NavItem>
          <PopoverMenu />
        </NavItemList>
      </nav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.160784);
`

const NavItemList = styled.ul`
  font-size: 16px;
  line-height: 23px;
`

const CounterBadge: FC<{ children: ReactNode; counter: number }> = ({ children, counter }) => {
  return (
    <div className="relative">
      <div className="flex-center absolute top-0 -right-2 w-4 h-4">
        <InfoCountIcon className="absolute top-0 left-0" />
        <span className="relative z-1 text-xs">{counter > 9 ? '9+' : counter}</span>
      </div>
      {children}
    </div>
  )
}

const NavItem: FC<{
  children?: ReactNode
  to?: string
}> = ({ children, to }) => {
  const content = (
    <li tabIndex={0} className="py-3 pl-2 pr-4 w-40 flex items-center gap-2">
      {children}
    </li>
  )

  if (to) {
    return <NavLink to={to}>{content}</NavLink>
  }

  return content
}

const menuItems = [
  {
    label: '自分の記録',
    to: ROUTER_PATHS.MyRecords,
  },
  {
    label: '体重グラフ',
  },
  {
    label: '目標',
  },
  {
    label: '選択中のコース',
  },
  {
    label: 'コラム一覧',
    to: ROUTER_PATHS.ColumnPage,
  },
  {
    label: '設定',
  },
]

const PopoverMenu = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen((o) => !o)
  }

  const closePopover = () => {
    setOpen(false)
  }

  useClickOutside(containerRef, closePopover)

  return (
    <div className="relative select-none overflow-visible w-8 h-8 ml-4" role="button">
      <button
        onKeyUp={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (e.key == ' ') {
            toggleOpen()
          }
        }}
        onClick={toggleOpen}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div ref={containerRef} className={open ? 'absolute top-8 right-0 w-[280px]' : 'hidden'}>
        {menuItems.map(({ label, to }) => {
          const content = (
            <div
              onClick={closePopover}
              key={label}
              className="pl-8 py-6 cursor-pointer w-full bg-gray-400 border-t-[#FFFFFF26] border-b-[#2E2E2E40] border-b border-t"
            >
              {label}
            </div>
          )

          if (to) {
            return (
              <NavLink key={label} to={to}>
                {content}
              </NavLink>
            )
          }

          return content
        })}
      </div>
    </div>
  )
})

PopoverMenu.displayName = 'PopoverMenu'

export default Header
