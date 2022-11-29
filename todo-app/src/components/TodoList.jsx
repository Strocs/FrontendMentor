// import { useState } from 'react'
import { useEffect, useState } from 'react'
import { LoadingTodo } from './LoadingTodo'
import { TodoItem } from './TodoItem'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'
export const TodoList = ({
  markAsComplete,
  deleteTodo,
  addTag,
  removeTag,
  todos,
  reorderTodos,
  todoFilter,
  tagArray,
  FilteredComponent
}) => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <DragDropContext onDragEnd={result => reorderTodos(result)}>
      <Droppable droppableId='todos'>
        {droppableProvided => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
          >
            {todos.map((todo, index) => {
              // FilteredComponent(
              //   <TodoItem
              //     index={index}
              //     key={todo.created}
              //     text={todo.text}
              //     completed={todo.completed}
              //     created={todo.created}
              //     tags={todo.tags}
              //     markAsComplete={markAsComplete}
              //     deleteTodo={deleteTodo}
              //     addTag={addTag}
              //     removeTag={removeTag}
              //   />,
              //   todo
              // )
              // return null
              if (todoFilter === 'Completed' && todo.completed) {
                return (
                  <TodoItem
                    index={index}
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
              } else if (todoFilter === 'Active' && !todo.completed) {
                return (
                  <TodoItem
                    index={index}
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
              } else if (
                tagArray.includes(todoFilter) &&
                todo.tags.includes(todoFilter)
              ) {
                return (
                  <TodoItem
                    index={index}
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
              } else if (todoFilter === 'All' || todoFilter === '') {
                return (
                  <TodoItem
                    index={index}
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
              }
              return null
            })}

            {droppableProvided.placeholder}
            {!hasMounted && <LoadingTodo />}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}
