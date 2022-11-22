export const TodoText = ({ completed, todo }) => {
  return (
    <p
      className={`text-sm text-lm-5 dark:text-dm-2 ${
        completed && 'text-lm-3 dark:text-dm-4 line-through'
      }`}
    >
      {todo[0].toUpperCase() + todo.slice(1)}
    </p>
  )
}
