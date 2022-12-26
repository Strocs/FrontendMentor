import { createBrowserRouter } from 'react-router-dom'
import { DetailPage, MainPage } from './pages'
import { dataFetch } from './utils/dataFetch'

export const router = createBrowserRouter([
  {
    path: '/',
    loader: dataFetch,
    element: <MainPage />
  },
  {
    path: '/:id',
    loader: dataFetch,
    element: <DetailPage />
  }
])
