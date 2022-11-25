export const ClearCompleted = ({ deleteCompletedTodos }) => {
  return (
    <button className='text-placeholder-dark dark:text-placeholder-dark hover:text-primary-dark dark:hover:text-primary-light' type='button' onClick={() => deleteCompletedTodos()}>
      Clear Completed
    </button>
  )
}
