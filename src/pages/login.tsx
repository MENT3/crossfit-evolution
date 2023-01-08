import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '~/contexts/auth-provider'
import { supabase } from '~/lib/supabase'

export default function AuthPage() {
  const { user } = useAuth()

  return user ? (
    <Navigate to="/" replace />
  ) : (
    <div className="mx-auto mt-16 max-w-[500px]">
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    </div>
  )
}
