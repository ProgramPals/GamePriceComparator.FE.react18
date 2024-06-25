import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { MainErrorFallback } from '@/components/errors/main';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={<div>Loading...</div>}
    >
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        {/* <Notifications /> */}
        {children}
      </ErrorBoundary>
    </React.Suspense>
  );
};
