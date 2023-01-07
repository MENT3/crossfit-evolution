import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '~/contexts/auth-provider'
import { supabase } from '~/lib/supabase'

export default function AuthPage() {
  const { user } = useAuth()

  return user ? (
    <Navigate to="/" replace />
  ) : (
    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
  )
}
