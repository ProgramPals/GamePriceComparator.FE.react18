// Login.tsx
import type React from 'react'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'

import type { AppDispatch, RootState } from '../../store'
import { login } from '../../../features/AuthSlice'

import {
  Form,
  useNavigate,
} from 'react-router-dom'

const TOKEN_KEY = 'PC_account_data_'

// @ts-ignore
// called on "post", "put", "patch", "delete"
export async function action({ request }) {
  const data = Object.fromEntries(await request.formData())
  console.log('data: ', data)

  const { email, password } = data
  return { email, password }
}

export function Component() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch<AppDispatch>()
  const { isLoading, error } = useAppSelector((state: RootState) => state.Auth)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(login({ email, password }))
      .unwrap()
      .then((response) => {
        const { token } = response
        localStorage.setItem(TOKEN_KEY, token)
        navigate('/')
      })
      .catch(() => {
        // Handle error
      })
  }

  return (
    <>
      <div>
        <Form method="post" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {
            error
            && (
              <p aria-live="polite" style={{ color: 'red' }}>
                {error}
              </p>
            )
          }
          <div>
            <label htmlFor="email">Email:</label>
            <input
              // type="email"
              type="string"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              name="email"
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              name="password"
              aria-required="true"
            />
          </div>
          <button type="submit">
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </Form>
      </div>
    </>
  )
}

Component.displayName = 'Login'
