import { useTodo } from '../hooks/useTodo'
import { TodoItem } from './TodoItem'
import { CreateTodoInput } from './CreateTodoInput'
import { ItemsLeft } from './ItemsLeft'
import { ClearCompleted } from './ClearCompleted'
import { TodoFilter } from './TodoFilter'

export const Main = () => {
  const {
    todos,
    todosList,
    createTodo,
    deleteTodo,
    markAsComplete,
    deleteCompletedTodos,
    setTodoFilter,
    addTag,
    removeTag
  } = useTodo()

  return (
    <main className='w-full h-full max-w-2xl flex flex-col justify-between gap-4 sm:flex-row'>
      <section className='w-full'>
        <CreateTodoInput callback={createTodo} todoLength={todos.length} />
        <div className='rounded-md shadow-xl overflow-hidden'>
          <ul>
            {todosList.map((todo) => {
              return (
                <TodoItem
                  key={todo.created}
                  text={todo.text}
                  completed={todo.completed}
                  created={todo.created}
                  tags={todo.tags}
                  markAsComplete={markAsComplete}
                  deleteTodo={deleteTodo}
                  addTag={addTag}
                  removeTag={removeTag}
                />
              )
            })}
          </ul>
          {/* {todos.length === 0 && <LoadingTodo />} */}
          <div className='flex bg-primary-light dark:bg-primary-dark p-5 justify-between items-center text-xs text-placeholder-dark dark:text-placeholder-light'>
            <ItemsLeft todos={todos} />
            <ClearCompleted deleteCompletedTodos={deleteCompletedTodos} />
          </div>
        </div>
        <p className='text-sm text-center text-placeholder-dark mt-14 mb-2'>Drag and drop to reorder list</p>
      </section>
      <section className='bg-primary-light dark:bg-primary-dark rounded-md shadow-xl max-w-[7rem] mb-[5.25rem]'>
        <TodoFilter
          setTodoFilter={setTodoFilter}
          className='flex flex-wrap justify-center gap-1 p-1'
          todos={todos}
        />
      </section>
    </main>
  )
}
