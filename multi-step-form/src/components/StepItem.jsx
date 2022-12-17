export const StepItem = ({ children, step = 0, stepName = 'Default Page' }) => {
  return (
    <li className="sm:flex sm:items-center sm:gap-4">
      {children}
      <div className="leading-5 hidden sm:block">
        <span className="text-Cool-gray text-[.8rem]">STEP {step}</span>
        <h2 className="text-white font-bold tracking-wider text-sm">{stepName.toUpperCase()}</h2>
      </div>
    </li>
  )
}
