import { useAuth } from '@/hooks/useAuth'

import { AppProvider } from './main-provider'
import { Router } from './routes/router'

const App = () => {
  useAuth()

  return (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}

export default App
