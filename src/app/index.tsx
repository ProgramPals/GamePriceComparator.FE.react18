import { RouterProvider } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

import { AppProvider } from './main-provider'
import { router } from './routes'

const AppRouter = () => {
  return <RouterProvider router={router} />
}

const App = () => {
  useAuth()

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default App
