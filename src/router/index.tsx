import AppLayout from '@app/pages/AppLayout'
import LandingPage from '@app/pages/ColumnPage'
import HomePage from '@app/pages/HomePage'
import MyRecordsPage from '@app/pages/MyRecordsPage'
import { createBrowserRouter } from 'react-router-dom'

import { ROUTER_PATHS } from './constant'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: ROUTER_PATHS.Home,
        element: <HomePage />,
        index: true,
      },
      {
        path: ROUTER_PATHS.MyRecords,
        element: <MyRecordsPage />,
      },
      {
        path: ROUTER_PATHS.ColumnPage,
        element: <LandingPage />,
      },
    ],
  },
])

export default AppRouter
