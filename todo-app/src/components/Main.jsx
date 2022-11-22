import { useTodo } from '../hooks/useTodo'
import { TodoLayout } from './TodoLayout'
import { TodoModal } from './TodoModal'

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
      />
      {openModal && <TodoModal />}
    </main>
  )
}
