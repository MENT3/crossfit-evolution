import { lazy } from 'react'

import type { RouteObject } from 'react-router-dom'

const Login = lazy(() => import('~/pages/login'))
const Home = lazy(() => import('~/pages/home'))

type CustomRouteObject = RouteObject & { protected: boolean }

export const rootRoutes: CustomRouteObject[] = [
  {
    path: '/login',
    element: <Login />,
    protected: false
  },
  {
    path: '/',
    element: <Home />,
    protected: true
  }
]

export const routes: CustomRouteObject[] = [
  ...rootRoutes
]
