export const ActiveTodos = ({ todos }) => {
  return (
    <p className='text-placeholder-dark'>
      {todos.filter((todo) => !todo.completed).length} items left
    </p>
  )
}
