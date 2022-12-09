import { Navigate, Route, Routes } from 'react-router-dom'
import {
  AddOnPage,
  InfoPage,
  PlanPage,
  SummaryPage,
  SuccessPage
} from '../pages'
import { paths } from './'

export const Router = () => {
  const { personal, plans, addons, summary, success } = paths
  return (
    <Routes>
      <Route path={personal} element={<InfoPage />} />
      <Route path={plans} element={<PlanPage />} />
      <Route path={addons} element={<AddOnPage />} />
      <Route path={summary} element={<SummaryPage />} />
      <Route path={success} element={<SuccessPage />} />
      <Route path='/*' element={<Navigate to={personal} />} />
    </Routes>
  )
}
