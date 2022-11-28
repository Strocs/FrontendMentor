export const FilterButton = ({ title, callback }) => {
  return (
    <button
      className='text-[.7rem] h-fit px-2 py-1 w-fit leading-none bg-sky-700 rounded-md text-white hover:bg-gradient-to-r from-Gradient-1 to-Gradient-2'
      type='button'
      onClick={() => callback(title)}
    >
      {title[0].toUpperCase() + title.slice(1)}
    </button>
  )
}
