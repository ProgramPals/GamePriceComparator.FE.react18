import { checkAuth } from '@/features/user/api/AuthSlice'
import { useAppDispatch } from '@/hooks/redux'

import { useEffect } from 'react'

// @ts-ignore
export const useAuth = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])
}
