import { Cross } from './icons/Cross'

export const DeleteTodoButton = ({ todoId, callback }) => {
  return (
    <button className='opacity-100 lg:opacity-40 hover:opacity-100' type='button' onClick={() => callback(todoId)}>
      <Cross className='scale-75 fill-placeholder-dark dark:fill-placeholder-light' width='14' height='14' />
    </button>
  )
}
