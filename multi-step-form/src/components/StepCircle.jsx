export const StepCircle = ({ step, isActive }) => {
  return (
    <div
      className={`rounded-full grid place-items-center w-8 h-8 font-bold text-sm ${
        isActive
          ? 'bg-Light-blue text-Marine-blue'
          : 'border border-Alabaster text-Alabaster'
      }`}
    >
      {step}
    </div>
  )
}
