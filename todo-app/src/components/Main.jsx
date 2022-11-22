import { useTodo } from '../hooks/useTodo'
import { TodoLayout } from './TodoLayout'
import { TodoModal } from './TodoModal'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'

export const Main = () => {
  const {
    todos,
    todosList,
    createTodo,
    deleteTodo,
    markAsComplete,
    deleteCompletedTodos,
    setTodoFilter,
    toggleModal,
    openModal
  } = useTodo()
  return (
    <main className='flex gap-8 max-w-7xl relative'>
      <TodoLayout
        todos={todos}
        todosList={todosList}
        createTodo={createTodo}
        deleteTodo={deleteTodo}
        markAsComplete={markAsComplete}
        deleteCompletedTodos={deleteCompletedTodos}
        setTodoFilter={setTodoFilter}
        toggleModal={toggleModal}
      >
        <TodoList>
          {todosList.map(todo => {
            return (
              <TodoItem
                key={todo.created}
                todo={todo.todo}
                completed={todo.completed}
                created={todo.created}
                deadLine={todo.deadLine}
                markAsComplete={markAsComplete}
                deleteTodo={deleteTodo}
                toggleModal={toggleModal}
              />
            )
          })}
        </TodoList>
      </TodoLayout>
      {openModal && <TodoModal />}
    </main>
  )
}
