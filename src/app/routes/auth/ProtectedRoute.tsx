import { useAppSelector } from '@/hooks/redux'
import type * as React from 'react'
import type { RootState } from '@/app/store'
import {
  Outlet,
  Navigate,
  useLocation,
} from 'react-router-dom'

export type AuthenticationGuardProps = {
  children?: React.ReactElement
  redirectPath?: string
}

export const ProtectedRoute: React.FC<AuthenticationGuardProps> = ({
  redirectPath = '/login',
  children,
}) => {
  const location = useLocation()
  const { isAuthenticated } = useAppSelector((state: RootState) => state.Auth)

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={redirectPath} state={{ from: location }} replace />
  }

  return children ?? <Outlet />
}
