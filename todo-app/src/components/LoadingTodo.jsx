import { ToggleCompletedButton } from './ToggleCompletedButton'

export const LoadingTodo = () => {
  return (
    <div className='grid grid-flow-col items-center justify-between bg-primary-light dark:bg-primary-dark px-5 py-3 border-b border-bg-light dark:border-bg-dark'>
      <div className='flex gap-4 items-center'>
        <ToggleCompletedButton />
        <div className='flex flex-col gap-1'>
          <div className='h-3 w-40 bg-bg-light dark:bg-dark-extra rounded-md' />
          <div className='h-3 w-28 bg-bg-light dark:bg-dark-extra rounded-md' />
        </div>
      </div>
      <div className='h-4 w-4 bg-bg-light dark:bg-dark-extra rounded-full' />
    </div>
  )
}
