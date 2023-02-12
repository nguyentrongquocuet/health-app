import AppLayout from '@app/pages/AppLayout'
import AppRouting from '@app/pages/AppRouting'
import AuthProvider from '@app/providers/auth'
import { createBrowserRouter } from 'react-router-dom'

const AppRouter = createBrowserRouter([
  {
    path: '*',
    element: (
      <AuthProvider>
        <AppLayout>
          <AppRouting />
        </AppLayout>
      </AuthProvider>
    ),
  },
])

export default AppRouter
