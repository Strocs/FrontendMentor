export const ToggleDarkModeButton = ({ mode, callback, selected, darkMode, children }) => {
  return (
    <button
      className={`flex gap-1 w-20 h-7 items-center py-[.4rem] px-3 ${
        selected && 'bg-bg-light dark:bg-dark-extra rounded-lg'
      }`}
      onClick={() => callback(darkMode)}
    >
      <div className='grid place-items-center'>{children}</div>
      <p className='text-xs h-full font-medium text-dark-extra dark:text-primary-light hover:bg-gradient-to-br from-Gradient-1 to-Gradient-2 hover:bg-clip-text hover:text-transparent dark:hover:text-transparent'>
        {mode}
      </p>
    </button>
  )
}
