import { useAuth } from "~/contexts/auth-provider"

export default function Home() {
  const { signOut } = useAuth()

  return (
    <div>
      <h2>HOME</h2>
      <button onClick={signOut}>Logout</button>
    </div>
  )
}
