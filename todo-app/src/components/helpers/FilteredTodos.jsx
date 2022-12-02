export const FilteredTodos = ({ children, filter, todo, tagArray }) => {
  if (filter === 'Completed' && todo.completed) return children
  if (filter === 'Active' && !todo.completed) return children
  if (tagArray.includes(filter) && todo.tags.includes(filter)) return children
  if (filter === 'All') return children
}
