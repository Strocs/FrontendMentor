export const LoadingTodo = () => {
  return (
    <div className='grid grid-flow-col items-center justify-between bg-white dark:bg-dm-6 px-5 py-3 border-b dark:border-dm-4'>
      <div className='flex gap-4 items-center'>
        <div className='grid place-items-center h-5 w-5 border dark:border-dm-4 rounded-full' />
        <div className='flex flex-col gap-1'>
          <div className='h-3 w-40 bg-lm-2 dark:bg-lm-5 rounded-md' />
          <div className='h-3 w-28 bg-lm-2 dark:bg-lm-5 rounded-md' />
        </div>
      </div>
      <div className='h-4 w-4 bg-lm-2 dark:bg-lm-5 rounded-full' />
    </div>
  )
}
