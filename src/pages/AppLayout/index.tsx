import { Outlet } from 'react-router-dom'

import AppHeader from './components/AppHeader'

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <main id="app-main">
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout
