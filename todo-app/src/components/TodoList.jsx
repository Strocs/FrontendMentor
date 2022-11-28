import { TodoItem } from './TodoItem'

export const TodoList = ({
  markAsComplete,
  deleteTodo,
  addTag,
  removeTag,
  todosList,
  changeTodoOrder
}) => {
  return (
    <ul>
      {!!todosList && todosList.map((todo) => {
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
      {!todosList && <p>Loading...</p>}
    </ul>
  )
}
