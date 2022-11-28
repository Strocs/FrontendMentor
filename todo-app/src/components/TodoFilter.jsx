import { FilterButton } from './FilterButton'

export const TodoFilter = ({ setTodoFilter, tagArray }) => {
  return (
    <div className='flex flex-wrap justify-center gap-1'>
      <FilterButton title='All' callback={setTodoFilter} />
      <FilterButton title='Active' callback={setTodoFilter} />
      <FilterButton title='Completed' callback={setTodoFilter} />
      {tagArray.map((tag) => (
        <FilterButton key={tag} title={tag} callback={setTodoFilter} />
      ))}
    </div>
  )
}
