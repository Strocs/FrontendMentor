export const DeleteTodoButton = ({ todoId, callback }) => {
  return (
    <button type='button' onClick={() => callback(todoId)}>
      <img className='h-3 w-3' src='/icon-cross.svg' alt='Delete Todo' />
    </button>
  )
}
