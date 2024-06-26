import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import {
  AuthenticationGuard as PrivateRoute,
} from '@/app/routes/auth/AuthenticationGuard'

import ErrorPage from '../ui-components/error-page'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      lazy={() => import('./app/root')}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index lazy={() => import('./app/index')} />
        <Route path="login" lazy={() => import('./auth/Login')} />
        <Route path="register" lazy={() => import('./auth/Register')} />
        <Route element={<PrivateRoute />}>
          <Route
            path="contacts/:contactId"
            lazy={() => import('./app/contact')}
          />
          <Route
            path="contacts/:contactId/edit"
            lazy={() => import('./app/edit')}
          />
          <Route
            path="contacts/:contactId/destroy"
            lazy={() => import('./app/delete')}
            errorElement={<div>Oops! There was an error.</div>}
          />
          <Route path="logout" />
        </Route>
      </Route>
    </Route>,
  ),
)

// left for reference
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [
//       { index: true, element: <Index /> },
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//         loader: contactLoader,
//       },
//       {
//         path: "contacts/:contactId/edit",
//         element: <EditContact />,
//         loader: contactLoader,
//         action: editAction,
//       },
//       {
//         path: "contacts/:contactId/destroy",
//         action: deleteAction,
//       },
//       {
//         path: "user",
//         action: deleteAction,
//       },
//       {
//         path: "login",
//         element: <Login />,
//         action: loginAction,
//       },
//       {
//         path: "user/manage",
//         action: deleteAction,
//       },
//       {
//         path: "register",
//         element: <Register />,
//         action: deleteAction,
//       },
//       {
//         path: "logout",
//         action: loginAction,
//       },

//     ],
//   },
// ]);
