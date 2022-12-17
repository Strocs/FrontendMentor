import { useContext, useEffect, useState } from "react"
import { FormContext } from "../context/formContext"

export const useValidateChangePage = (onChangePage) => {
  const { name, email, phone, onValidate } = useContext(FormContext)
  const [animation, setAnimation] = useState(false)

  const onAnimate = () => {
    setAnimation(true)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => setAnimation(false), 500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [animation])

  const onValidateChangePage = () => {
    if (name && email && phone) {
      onChangePage()
      return
    }
    // onValidate function to change state of errors on useSubscription when Next Step Button is click it to show "This field is required" on every input field
    // each calls is not taking last calls change of errors state and showing only last call change
    // Idk why this happen and how resolve it
    onValidate('name', name)
    onValidate('email', email)
    onValidate('phone', phone)
    onAnimate()
  }
  return {
    onValidateChangePage,
    animation
  }
}
