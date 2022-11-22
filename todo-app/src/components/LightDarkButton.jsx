export const LightDarkButton = ({ mode, callback, selected, children }) => {
  return (
    <button
      className={`flex gap-1 items-center py-[.4rem]  px-3 ${
        selected && 'bg-lm-2 dark:bg-lm-5 rounded-lg'
      }`}
      onClick={() => callback()}
    >
      <div className='grid place-items-center'>{children}</div>
      <p className='text-xs leading-3 text-dm-5 dark:text-lm-2 hover:bg-gradient-to-br from-Gradient-1 to-Gradient-2 hover:bg-clip-text hover:text-transparent'>{mode}</p>
    </button>
  )
}
