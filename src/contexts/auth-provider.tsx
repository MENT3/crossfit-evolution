import { AuthError, AuthResponse, Session, SignInWithPasswordCredentials, SignUpWithPasswordCredentials } from '@supabase/supabase-js'
import React, { useContext, useState, useEffect, type ReactNode, Context } from 'react'

import { supabase } from '~/lib/supabase'
import { AuthContextProps } from '~/types/supabase'

const AuthContext = React.createContext<AuthContextProps | null>(null)

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState<Boolean>(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session }}) => {
      setSession(session)
      setLoading(false)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setLoading(false)
    })
  }, [])

  const authContextProps: AuthContextProps = {
    signUp: payload => supabase.auth.signUp(payload),
    signInWithPassword: payload => supabase.auth.signInWithPassword(payload),
    signOut: () => supabase.auth.signOut(),
    user: session?.user ?? null
  }

  if (loading) {
    return <div>LOADING AUTH</div>
  }

  return (
    <AuthContext.Provider value={authContextProps}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
