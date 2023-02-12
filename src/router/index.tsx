import AppLayout from '@app/pages/AppLayout'
import { lazy } from '@loadable/component'
import { createBrowserRouter } from 'react-router-dom'

import { ROUTER_PATHS } from './constant'

const LoadableHomePage = lazy(() => import('@app/pages/HomePage'))
const LoadableMyRecordsPage = lazy(() => import('@app/pages/MyRecordsPage'))
const LoadableColumnPage = lazy(() => import('@app/pages/ColumnPage'))

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: ROUTER_PATHS.Home,
        element: <LoadableHomePage />,
        index: true,
      },
      {
        path: ROUTER_PATHS.MyRecords,
        element: <LoadableMyRecordsPage />,
      },
      {
        path: ROUTER_PATHS.ColumnPage,
        element: <LoadableColumnPage />,
      },
    ],
  },
])

export default AppRouter
