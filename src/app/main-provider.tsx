import React from 'react'
import { ThemeProvider } from '@/features/themes/ThemeProvider'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={<div>Loading...</div>}
    >
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </React.Suspense>
  )
}
