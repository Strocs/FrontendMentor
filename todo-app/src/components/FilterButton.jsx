export const FilterButton = ({ title, setFilter, index }) => {
  return (
    <button
      className='text-[.7rem] px-2 py-1 leading-none bg-sky-700 rounded-md text-white hover:bg-gradient-to-r from-Gradient-1 to-Gradient-2'
      type='button'
      onClick={() => setFilter(title)}
    >
      {title[0].toUpperCase() + title.slice(1)}
    </button>
  )
}
