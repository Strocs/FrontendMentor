export const ItemsLeft = ({ todos }) => {
  return <p>{todos.filter(todo => !todo.completed).length} items left</p>
}
