import { NavLink } from 'react-router-dom'

export const StepLayout = ({ children }) => {
  return (
    <ul>
      <li>{children}</li>
    </ul>
  )
}
