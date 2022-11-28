import { useState } from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({
  markAsComplete,
  deleteTodo,
  addTag,
  removeTag,
  todosList,
  changeTodoOrder
}) => {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragging = (dragging) => setIsDragging(dragging)

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
            isDragging={isDragging}
            handleDragging={handleDragging}
          />
        )
      })}
      {!todosList && <p>Loading...</p>}
    </ul>
  )
}
