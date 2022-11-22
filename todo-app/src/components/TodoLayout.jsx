import { ClearCompleted } from './ClearCompleted'
import { CreateTodoInput } from './CreateTodoInput'
import { ItemsLeft } from './ItemsLeft'
import { LoadingTodo } from './LoadingTodo'
import { TodoFilter } from './TodoFilter'

export const TodoLayout = ({
  todos,
  createTodo,
  deleteCompletedTodos,
  setTodoFilter,
  children
}) => {
  return (
    <section className='w-full max-w-xl'>
      <CreateTodoInput callback={createTodo} todoLength={todos.length} />
      <div className='rounded-md shadow-xl overflow-hidden'>
        {children}
        {todos.length === 0 && <LoadingTodo />}
        <div className='flex bg-white dark:bg-dm-6 p-5 justify-between items-center text-xs text-lm-4 dark:text-dm-3'>
          <ItemsLeft todos={todos} />
          <ClearCompleted deleteCompletedTodos={deleteCompletedTodos} />
        </div>
      </div>
      <TodoFilter setTodoFilter={setTodoFilter} />
      <p className='text-sm text-center text-lm-4 dark:text-dm-4 mt-14 mb-2'>
        Drag and drop to reorder list
      </p>
    </section>
  )
}
