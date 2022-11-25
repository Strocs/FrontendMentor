import { Tags } from './Tags'

export const CreatedDate = ({ created, completed }) => {
  const timeElapsed = Math.floor((new Date() - created) / 1000 / 60 / 60 / 24)

  return (
    <Tags
      className={
        completed
          ? 'bg-placeholder-light'
          : timeElapsed < 24
            ? 'bg-green-700'
            : timeElapsed < 48
              ? 'bg-yellow-500'
              : 'bg-red-700'
      }
      text={
        completed
          ? 'Completed'
          : timeElapsed < 24
            ? 'Today'
            : timeElapsed < 48
              ? 'Yesterday'
              : 'Since 2+ days'
      }
    />
  )
}
