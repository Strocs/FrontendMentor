export const FilterButton = ({ title, callback }) => {
  return (
    <button
      className='text-[.7rem] px-2 py-[.07rem] leading-4 bg-sky-700 rounded-md text-white hover:bg-gradient-to-r from-Gradient-1 to-Gradient-2'
      type='button'
      onClick={() => callback(title)}
    >
      {title}
    </button>
  )
}
