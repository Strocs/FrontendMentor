export const ToggleCompletedButton = ({
  completed = false,
  todoId = undefined,
  toggleCompleted = null
}) => {
  return (
    <button
      type='button'
      onClick={() => toggleCompleted !== null ? toggleCompleted(todoId) : toggleCompleted}
      className={`grid place-items-center h-5 w-5 rounded-full flex-shrink-0 text-transparent ${
        completed
          ? 'bg-gradient-to-br from-Gradient-1 to-Gradient-2'
          : 'border border-placeholder-light dark:border-placeholder-dark'
      } ${!toggleCompleted && 'cursor-default'}`}
    >
      {completed ? (<img src='/icon-check.svg' alt='' aria-hidden />) : ('-')}
    </button>
  )
}
