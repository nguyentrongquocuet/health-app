import { useAuth } from '@app/hooks/useAuth'
import { ROUTER_PATHS } from '@app/router/constant'
import { Navigate, Route, Routes } from 'react-router'

import ColumnPage from './ColumnPage'
import HomePage from './HomePage/loadable'
import MyRecordsPage from './MyRecordsPage'
import NotFound from './NotFound'

const AppRouting = () => {
  const { authenticated } = useAuth()

  if (authenticated) {
    return (
      <Routes>
        <Route path={ROUTER_PATHS.Home} index element={<HomePage />} />
        <Route path={ROUTER_PATHS.ColumnPage} element={<ColumnPage />} />
        <Route path={ROUTER_PATHS.MyRecords} element={<MyRecordsPage />} />
        <Route path={ROUTER_PATHS.NotFound} element={<NotFound />} />
        <Route path="*" element={<Navigate to={ROUTER_PATHS.ColumnPage} replace />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path={ROUTER_PATHS.ColumnPage} element={<ColumnPage />} index />
      <Route path={ROUTER_PATHS.NotFound} element={<NotFound />} />
      <Route path="*" element={<Navigate to={ROUTER_PATHS.ColumnPage} replace />} />
    </Routes>
  )
}

export default AppRouting
