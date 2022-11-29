import { useTodo } from '../hooks/useTodo'
import { CreateTodoInput } from './CreateTodoInput'
import { ItemsLeft } from './ItemsLeft'
import { ClearCompleted } from './ClearCompleted'
import { TodoFilter } from './TodoFilter'
import { TodoList } from './TodoList'
import { useFilterTodos } from '../hooks/useFilterTodos'

export const Main = () => {
  const {
    todos,
    createTodo,
    deleteTodo,
    markAsComplete,
    deleteCompletedTodos,
    addTag,
    removeTag,
    tagArray,
    reorderTodos
  } = useTodo()
  const { todoFilter, setTodoFilter, FilteredComponent } = useFilterTodos()
  return (
    <main className='w-full h-full max-w-2xl flex flex-col justify-between gap-4 sm:flex-row relative'>
      <div className='w-full'>
        <CreateTodoInput callback={createTodo} todoLength={todos.length} />
        <div className='rounded-md shadow-xl overflow-hidden'>
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            markAsComplete={markAsComplete}
            addTag={addTag}
            removeTag={removeTag}
            reorderTodos={reorderTodos}
            todoFilter={todoFilter}
            tagArray={tagArray}
            FilteredComponent={FilteredComponent}
          />

          <div className='flex bg-primary-light dark:bg-primary-dark p-5 justify-between items-center text-xs text-placeholder-dark dark:text-placeholder-light'>
            <ItemsLeft todos={todos} />
            <ClearCompleted deleteCompletedTodos={deleteCompletedTodos} />
          </div>
        </div>
        <div className='absolute bottom-5 mx-auto sm:relative w-full'>
          <p className='text-sm text-center text-placeholder-dark mt-14 mb-2'>
            Drag and drop to reorder list
          </p>
        </div>
      </div>
      <div className='bg-primary-light dark:bg-primary-dark rounded-md shadow-xl py-2 px-1 sm:max-w-[7rem] mb-[5.25rem]'>
        <TodoFilter setTodoFilter={setTodoFilter} tagArray={tagArray} />
      </div>
    </main>
  )
}
