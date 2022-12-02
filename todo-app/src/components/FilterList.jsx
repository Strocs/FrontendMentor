import { FilterButton } from './'

export const FilterList = ({ setFilter, tagArray }) => {
  return (
    <div className='flex flex-wrap justify-center gap-1'>
      <FilterButton title='All' setFilter={setFilter} />
      <FilterButton title='Active' setFilter={setFilter} />
      <FilterButton title='Completed' setFilter={setFilter} />
      {tagArray.map((tag, index) => (
        <FilterButton key={tag} title={tag} setFilter={setFilter} index={index} />
      ))}
    </div>
  )
}
