import { AuthError } from '@supabase/supabase-js'
import { FormEvent, useRef, useState } from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom'

import { useAuth } from '~/contexts/auth-provider'

export default function Login() {
  const { signInWithPassword, user } = useAuth()

  if (user) {
    return <Navigate to="/" replace />
  }

  const [error, setError] = useState<AuthError>()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const email = emailRef.current?.value!
    const password = passwordRef.current?.value!

    const { error } = await signInWithPassword({ email, password })

    if (error) setError(error)
    else navigate('/')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>{error && JSON.stringify(error)}</div>

        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Login</button>
      </form>
      <br />
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  )
}
