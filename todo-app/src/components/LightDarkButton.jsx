export const LightDarkButton = ({ mode, callback, selected, children }) => {
  return (
    <button
      className={`flex gap-1 items-center py-[.4rem]  px-3 ${
        selected && 'bg-bg-light dark:bg-dark-extra rounded-lg'
      }`}
      onClick={() => callback()}
    >
      <div className='grid place-items-center'>{children}</div>
      <p className='text-xs h-full font-medium text-dark-extra dark:text-primary-light hover:bg-gradient-to-br from-Gradient-1 to-Gradient-2 hover:bg-clip-text hover:text-transparent dark:hover:text-transparent'>{mode}</p>
    </button>
  )
}
