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
    <main className='w-full h-full max-w-xl flex flex-col justify-between gap-4 sm:flex-row'>
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
      </section>

      <TodoFilter
        setTodoFilter={setTodoFilter}
        className='flex sm:flex-col gap-1 px-1 py-2 bg-primary-light dark:bg-primary-dark mt-4 sm:mt-0 rounded-md shadow-xl'
      />
    </main>
  )
}
