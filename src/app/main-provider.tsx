import React from 'react'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={<div>Loading...</div>}
    >
      {children}
    </React.Suspense>
  )
}
