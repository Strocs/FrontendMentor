export const TodoText = ({ completed, text }) => {
  return (
    <p
      className={`text-sm ${
        completed
          ? 'text-placeholder-dark dark:text-placeholder-dark line-through'
          : 'text-primary-dark dark:text-primary-light'
      }`}
    >
      {text}
    </p>
  )
}
