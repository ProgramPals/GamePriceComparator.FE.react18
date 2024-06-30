import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { ProtectedRoute } from '@/app/routes/auth/ProtectedRoute'
import ErrorPage from '@/components/errors/ErrorPage'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      lazy={() => import('./app/index')}
      errorElement={<ErrorPage />}
    >
      <Route index element={<ErrorPage />} lazy={() => import('./app/homepage')} />
      <Route path="otherpage" lazy={() => import('./app/otherpage')} />
      <Route path="login" lazy={() => import('./auth/Login')} />
      <Route path="register" lazy={() => import('./auth/Register')} />
      <Route element={<ProtectedRoute />}>
        <Route path="logout" lazy={() => import('./auth/Logout')} />
      </Route>
    </Route>,
  ),
)

export function Router() {
  return <RouterProvider router={router} />
}
