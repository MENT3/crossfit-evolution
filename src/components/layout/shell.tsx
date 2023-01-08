import { ReactNode } from 'react'
import { useAuth } from '~/contexts/auth-provider'

export const Shell = ({ children }: { children: ReactNode }) => {
  const { signOut, user } = useAuth()

  return (
    <>
      <nav className="p-2 flex justify-between bg-sky-100">
        logo
        {user && (
          <button
            className="px-3 py-1 bg-slate-700 text-sm text-white rounded transition hover:bg-slate-800"
            onClick={signOut}
          >
            Déconnexion
          </button>
        )}
      </nav>

      <main className="p-2 mt-2">{children}</main>
    </>
  )
}
