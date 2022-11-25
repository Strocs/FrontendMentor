import { FilterButton } from './FilterButton'

export const TodoFilter = ({ setTodoFilter, className, todos }) => {
  const tagSet = new Set(todos.map((todo) => todo.tags).flat())
  const tagArray = []
  tagSet.forEach(tag => tagArray.push(tag))

  return (
    <div className={className}>
      <FilterButton title='All' callback={setTodoFilter} />
      <FilterButton title='Active' callback={setTodoFilter} />
      <FilterButton title='Completed' callback={setTodoFilter} />
      {tagArray.map(tag => <FilterButton key={tag} title={tag} callback={setTodoFilter} />)}
    </div>
  )
}
