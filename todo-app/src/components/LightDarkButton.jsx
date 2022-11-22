export const LightDarkButton = ({ mode, callback, selected, children }) => {
  return (
    <button
      className={`flex gap-2 items-center py-[.4rem]  px-3 ${selected &&
        'bg-dm-1 dark:bg-lm-5 rounded-lg'}`}
      onClick={() => callback()}
    >
      <div className='grid place-items-center'>{children}</div>
      <p className='text-xs leading-3 text-dm-5 dark:text-lm-1'>{mode}</p>
    </button>
  )
}
