import AppRouter from '@app/router'
import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

const App: FC = () => {
  return <RouterProvider router={AppRouter} />
}

export default App
