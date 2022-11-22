export const ClearCompleted = ({ deleteCompletedTodos }) => {
  return (
    <button type='button' onClick={() => deleteCompletedTodos()}>
      Clear Completed
    </button>
  )
}
