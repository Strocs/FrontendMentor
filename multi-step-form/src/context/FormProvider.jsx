import { useSubscription } from '../hooks/useSubscription'
import { FormContext } from './formContext'

export const FormProvider = ({ children }) => {
  const { subscription, onChangeValues, errors, onValidate } = useSubscription({
    name: '',
    email: '',
    phone: '',
    plan: 'Arcade',
    yearSubs: false,
    addons: []
  })

  return (
    <FormContext.Provider value={{ ...subscription, onChangeValues, errors, onValidate }}>
      {children}
    </FormContext.Provider>
  )
}
