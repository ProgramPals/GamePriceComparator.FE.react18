import {
  Form,
  useNavigate,
} from 'react-router-dom'
import { logout } from '@/features/user/api/AuthSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import type { AppDispatch, RootState } from '@/app/store'

const TOKEN_KEY = 'PC_account_data_'

export function Component() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch<AppDispatch>()
  const { isLoading } = useAppSelector((state: RootState) => state.Auth)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await dispatch(logout())
      localStorage.removeItem(TOKEN_KEY)
      navigate('/')
      console.log('logged out!')
    }
    catch (error) {
      console.error('Logout failed', error)
    }
  }

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <button type="submit">
        {isLoading ? 'Logging out...' : 'Logout'}
      </button>
    </Form>
  )
}

Component.displayName = 'Logout'
