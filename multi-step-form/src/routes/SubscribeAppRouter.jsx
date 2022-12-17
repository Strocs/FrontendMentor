import { Navigate, Route, Routes } from 'react-router-dom'
import {
  AddonPage,
  InfoPage,
  PlanPage,
  SummaryPage,
  SuccessPage
} from '../pages'
import { paths } from '../services'
import { PrivateRoute } from './PrivateRoute'

export const SubscribeAppRouter = () => {
  const { personal, planSelection, addonPicker, summary, success } = paths

  return (
    <Routes>
      <Route path='/*' element={<Navigate to={personal} />} />

      <Route path={personal} element={<InfoPage />} />

      <Route
        path={planSelection}
        element={
          <PrivateRoute>
            <PlanPage />
          </PrivateRoute>
        }
      />
      <Route
        path={addonPicker}
        element={
          <PrivateRoute>
            <AddonPage />
          </PrivateRoute>
        }
      />
      <Route
        path={summary}
        element={
          <PrivateRoute>
            <SummaryPage />
          </PrivateRoute>
        }
      />
      <Route
        path={success}
        element={
          <PrivateRoute>
            <SuccessPage />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}
