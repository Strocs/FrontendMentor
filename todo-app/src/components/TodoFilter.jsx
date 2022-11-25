import { FilterButton } from './FilterButton'

export const TodoFilter = ({ setTodoFilter, className }) => {
  return (
    <div className={className}>
      <FilterButton title='All' callback={setTodoFilter} />
      <FilterButton title='Active' callback={setTodoFilter} />
      <FilterButton title='Completed' callback={setTodoFilter} />
    </div>
  )
}
