import { Suspense } from 'react'
import { splitBy } from './utils/common/split-by'
import { routes } from './boot/router'
import { Route, Routes } from 'react-router-dom'
import { Protected } from './components/protect/protected'

function FullPageLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-dark-500">
      LOADING
    </div>
  )
}

export default function App() {
  const [protectedRoutes, guestRoutes] = splitBy(routes, (route) => route.protected)

  return (
    <div>
      <Suspense fallback={<FullPageLoader />}>
        <Routes>
          {guestRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          <Route element={<Protected />}>
            {protectedRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}
