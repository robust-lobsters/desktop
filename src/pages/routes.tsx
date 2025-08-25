import { createHashRouter, Navigate, Outlet, RouterProvider } from 'react-router'
import { Start } from './Start'
import { Providers } from 'components/Providers'
import { Game } from './Game'

const router = createHashRouter([
  {
    element: (
      <Providers>
        <Outlet />
      </Providers>
    ),

    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: 'game',
        element: <Game />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
