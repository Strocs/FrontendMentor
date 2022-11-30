import { useTodo, useFilterTodos } from '../hooks'
import {
  CreateTodo,
  ActiveTodos,
  ClearCompleted,
  FilterList,
  TodoList
} from './'

export const Main = ({ children }) => {
  const {
    todos,
    createTodo,
    deleteTodo,
    toggleCompleted,
    deleteCompleted,
    addTag,
    removeTag,
    tagArray,
    reorderTodos
  } = useTodo()
  const { setFilter, filter } = useFilterTodos()
  return (
    <main className='w-full h-full max-w-2xl flex flex-col justify-between gap-4 sm:flex-row relative'>
      <div className='w-full'>
        <CreateTodo createTodo={createTodo} />
        <div className='rounded-md shadow-xl overflow-hidden'>
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted}
            addTag={addTag}
            removeTag={removeTag}
            reorderTodos={reorderTodos}
            tagArray={tagArray}
            filter={filter}
          />

          <div className='flex bg-primary-light dark:bg-primary-dark p-5 justify-between items-center text-xs text-placeholder-dark dark:text-placeholder-light'>
            <ActiveTodos todos={todos} />
            <ClearCompleted deleteCompleted={deleteCompleted} />
          </div>
        </div>
        {children}
      </div>
      <div className='bg-primary-light dark:bg-primary-dark rounded-md shadow-xl py-2 px-1 sm:max-w-[7rem] mb-[5.25rem]'>
        <FilterList setFilter={setFilter} tagArray={tagArray} />
      </div>
    </main>
  )
}
