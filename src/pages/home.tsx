import { useAuth } from "~/contexts/auth-provider"

import { AuthContextProps } from "~/types/supabase"

export default function Home() {
  const { signOut } = useAuth() as AuthContextProps

  return (
    <div>
      <h2>HOME</h2>
      <button onClick={signOut}>Logout</button>
    </div>
  )
}
