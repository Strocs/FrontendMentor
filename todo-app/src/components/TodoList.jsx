import { DragDropContext, Droppable } from '@hello-pangea/dnd'
import { FilteredTodos } from './helpers'
import { TodoItem } from './'

export const TodoList = ({
  toggleCompleted,
  deleteTodo,
  addTag,
  removeTag,
  todos,
  reorderTodos,
  tagArray,
  filter
}) => {
  return (
    <DragDropContext onDragEnd={result => reorderTodos(result)}>
      <Droppable droppableId='todos'>
        {droppableProvided => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
          >
            {todos.map((todo, index) => (
              <FilteredTodos
                key={todo.created}
                todo={todo}
                filter={filter}
                tagArray={tagArray}
              >
                <TodoItem
                  index={index}
                  text={todo.text}
                  completed={todo.completed}
                  created={todo.created}
                  tags={todo.tags}
                  toggleCompleted={toggleCompleted}
                  deleteTodo={deleteTodo}
                  addTag={addTag}
                  removeTag={removeTag}
                />
              </FilteredTodos>
            ))}
            {droppableProvided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}
