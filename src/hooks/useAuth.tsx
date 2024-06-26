import { checkAuth } from '@/features/AuthSlice'
import { useAppDispatch } from '@/app/hooks'

import { useEffect } from 'react'

// @ts-ignore
export const useAuth = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])
}
