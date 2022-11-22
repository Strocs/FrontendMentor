export const ToggleCompletedButton = ({ completed, todoId, callback }) => {
  return (
    <button
      type='button'
      onClick={() => callback(todoId)}
      className={`grid place-items-center h-5 w-5 border dark:border-dm-4 rounded-full ${
        completed && 'bg-gradient-to-br from-Gradient-1 to-Gradient-2'
      }`}
    >
      {completed && <img src='/icon-check.svg' alt='' aria-hidden />}
    </button>
  )
}
