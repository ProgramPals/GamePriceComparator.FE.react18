import type * as React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import {
  Outlet,
  Navigate,
  useLocation
} from "react-router-dom";
 
export type AuthenticationGuardProps = {
  children?: React.ReactElement;
  redirectPath?: string;
};
 
export const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({
  redirectPath = '/login',
  children,
  ...props
}) => {
  const location = useLocation();
  const { isAuthenticated } = useSelector((state: RootState) => state.Auth);

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return children ?? <Outlet />;
};
