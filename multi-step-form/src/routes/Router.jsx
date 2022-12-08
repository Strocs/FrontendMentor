import { Navigate, Route, Routes } from 'react-router-dom'
import { AddOnPage, InfoPage, PlanPage, SummaryPage, ThankYouPage } from '../pages'

export const Router = () => {
  return (
    <Routes>
      <Route path='subscription/personal-info' element={<InfoPage />} />
      <Route path='subscription/plan-selection' element={<PlanPage />} />
      <Route path='subscription/addon-picker' element={<AddOnPage />} />
      <Route path='subscription/summary' element={<SummaryPage />} />
      <Route path='subscription/thank-you' element={<ThankYouPage />} />
      <Route path='/*' element={<Navigate to='subscription/personal-info' />} />
    </Routes>
  )
}
