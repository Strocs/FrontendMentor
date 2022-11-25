export const ToggleCompletedButton = ({
  completed = false,
  todoId = undefined,
  callback = null
}) => {
  return (
    <button
      type='button'
      onClick={() => callback(todoId)}
      className={`grid place-items-center h-5 w-5 rounded-full flex-shrink-0 ${
        completed
          ? 'bg-gradient-to-br from-Gradient-1 to-Gradient-2'
          : 'border border-placeholder-light dark:border-placeholder-dark'
      } ${callback === null ? 'cursor-default' : ''}`}
    >
      {completed && <img src='/icon-check.svg' alt='' aria-hidden />}
    </button>
  )
}
