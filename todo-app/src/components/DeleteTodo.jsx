import { Cross } from './icons'

export const DeleteTodo = ({ todoId, deleteTodo }) => {
  return (
    <button
      className='opacity-100 lg:opacity-40 hover:opacity-100'
      type='button'
      onClick={() => deleteTodo(todoId)}
    >
      <Cross
        className='scale-75 fill-placeholder-dark dark:fill-placeholder-light'
        width='14'
        height='14'
      />
    </button>
  )
}
