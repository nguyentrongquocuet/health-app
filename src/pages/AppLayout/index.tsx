import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import ScrollToTop from './components/ScrollToTop'

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <main id="app-main" className="pb-16">
        <Outlet />
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
