import { useState } from 'react'

export const useSubscription = (initialValue = {}) => {
  const [subscription, setSubscription] = useState(initialValue)
  const [errors, setErrors] = useState(initialValue)

  const validate = (name, value) => {
    if (!value) {
      return 'This field is required'
    }
    if (name === 'email' && !value.includes('@')) {
      return 'Invalid email address'
    }
    return ''
  }
  const onValidate = (name, value) => {
    const errorMessage = validate(name, value)
    setErrors({
      ...errors,
      [name]: errorMessage
    })
  }

  // show in console every change of errors for debug calls of onValidate on useValidateChangePage custom hooks that is used on NavigationButtons component.
  console.log(errors)

  const onChangeValues = (name, value) => {
    onValidate(name, value)
    setSubscription({
      ...subscription,
      [name]: value
    })
  }

  return {
    ...subscription,
    subscription,
    onChangeValues,
    errors,
    onValidate
  }
}
