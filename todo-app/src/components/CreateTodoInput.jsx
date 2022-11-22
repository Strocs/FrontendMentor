import { useRef } from 'react'

export const CreateTodoInput = ({ callback, todoLength }) => {
  const newTodoRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTodoRef.current !== null && newTodoRef.current.value.length > 1) {
      callback(newTodoRef.current.value)
      newTodoRef.current.value = ''
    }
  }

  return (
    <div className='flex gap-4 bg-white dark:bg-dm-6 w-full mb-4 py-3 px-5 rounded-md overflow-hidden shadow-xl'>
      <div className='h-5 w-5 rounded-full border dark:border-dm-4' />
      <form className='w-60' onSubmit={handleSubmit}>
        <input
          className='w-full text-xs text-lm-5 dark:text-dm-2 placeholder:text-xs placeholder:text-lm-4 dark:placeholder:text-dm-3 dark:bg-dm-6 focus:outline-none hover:outline-none outline-none'
          type='text'
          ref={newTodoRef}
          placeholder={`Let's create ${
            todoLength > 0 ? 'a new' : 'your first'
          } todo!`}
        />
      </form>
    </div>
  )
}
