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
      lazy={() => import('./app/contacts/root')}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index lazy={() => import('./app/index')} />
        <Route path="login" lazy={() => import('./auth/Login')} />
        <Route path="register" lazy={() => import('./auth/Register')} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="contacts/:contactId"
            lazy={() => import('./app/contacts/contact')}
          />
          <Route
            path="contacts/:contactId/edit"
            lazy={() => import('./app/contacts/edit')}
          />
          <Route
            path="contacts/:contactId/destroy"
            lazy={() => import('./app/contacts/delete')}
            errorElement={<div>Oops! There was an error.</div>}
          />
          <Route path="logout" />
        </Route>
      </Route>
    </Route>,
  ),
)

export function Router() {
  return <RouterProvider router={router} />
}
