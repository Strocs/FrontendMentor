import { RouterProvider } from 'react-router-dom'
import { Header } from './components'
import { router } from './router'

export const RestCountriesApp = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}
