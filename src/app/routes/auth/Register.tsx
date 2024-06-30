import type React from 'react'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import type { AppDispatch, RootState } from '@/app/store'
import { register } from '@/features/user/api/AuthSlice'

import {
  redirect,
} from 'react-router-dom'

export async function action() {
  return redirect(`/`)
}

export function Component() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch<AppDispatch>()
  const { isLoading, error } = useAppSelector((state: RootState) => state.Auth)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(register({ username, email, password }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register form</h2>
      {error && <p aria-live="polite" style={{ color: 'red' }}>{error}</p>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
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
          aria-required="true"
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>
    </form>
  )
}
