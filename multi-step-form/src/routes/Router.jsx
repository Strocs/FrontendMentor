import { Navigate, Route, Routes } from 'react-router-dom'
import { useForm } from '../hooks'
import {
  AddOnPage,
  InfoPage,
  PlanPage,
  SummaryPage,
  SuccessPage
} from '../pages'
import { paths } from './'

export const Router = () => {
  const { personal, planSelection, addonPicker, summary, success } = paths

  const { name, email, phone, plan, yearSubs, addons, onInputChange } = useForm(
    {
      name: '',
      email: '',
      phone: '',
      plan: '',
      yearSubs: false,
      addons: []
    }
  )

  return (
    <Routes>
      <Route
        path={personal}
        element={
          <InfoPage
            name={name}
            email={email}
            phone={phone}
            onInputChange={onInputChange}
          />
        }
      />
      <Route
        path={planSelection}
        element={
          <PlanPage
            plan={plan}
            yearSubs={yearSubs}
            onInputChange={onInputChange}
          />
        }
      />
      <Route
        path={addonPicker}
        element={
          <AddOnPage
            addons={addons}
            yearSubs={yearSubs}
            onInputChange={onInputChange}
          />
        }
      />
      <Route
        path={summary}
        element={
          <SummaryPage plan={plan} yearSubs={yearSubs} addons={addons} />
        }
      />
      <Route path={success} element={<SuccessPage />} />
      <Route path='/*' element={<Navigate to={personal} />} />
    </Routes>
  )
}
