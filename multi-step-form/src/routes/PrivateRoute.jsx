import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { FormContext } from '../context/formContext'

export const PrivateRoute = ({ children }) => {
  const { name, email, phone } = useContext(FormContext)
  return (name && email && phone) ? children : <Navigate to='/' />
}
