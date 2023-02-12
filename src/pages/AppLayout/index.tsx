import { Outlet } from 'react-router-dom'

import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <main id="app-main" className="pb-16">
        <Outlet />
      </main>
      <AppFooter />
    </>
  )
}

export default AppLayout
