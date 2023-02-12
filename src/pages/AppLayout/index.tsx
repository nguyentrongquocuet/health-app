import { Outlet } from 'react-router-dom'

import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <main id="app-main">
        <Outlet />
      </main>
      <AppFooter />
    </>
  )
}

export default AppLayout
