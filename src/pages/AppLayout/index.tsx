import { FC, ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import ScrollToTop from './components/ScrollToTop'

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main id="app-main" className="pb-16">
        {children}
      </main>
      <AppFooter />
      <AutoToTop />
      <ScrollToTop />
    </>
  )
}

const AutoToTop = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [location.pathname])

  return null
}

export default AppLayout
