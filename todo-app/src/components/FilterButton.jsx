export const FilterButton = ({ title, callback }) => {
  return (
    <button
      className='hover:bg-gradient-to-br from-Gradient-1 to-Gradient-2 hover:bg-clip-text hover:text-transparent'
      type='button'
      onClick={() => callback(title)}
    >
      {title}
    </button>
  )
}
