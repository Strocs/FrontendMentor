import { NavLink } from 'react-router-dom'

export const StepCircle = ({ step, path }) => {
  const isActive = ({ isActive }) =>
    `rounded-full grid place-items-center w-8 h-8 font-bold text-sm ${
      isActive
        ? 'bg-Light-blue text-Marine-blue'
        : 'border border-Alabaster text-Alabaster'
    }`
  return (
    <NavLink to={path} className={isActive}>
      <p className=''>{step}</p>
    </NavLink>
  )
}
