import { Draggable } from '@hello-pangea/dnd'
import {
  CreatedDate,
  ToggleCompletedButton,
  DeleteTodo,
  CreateTag,
  TagItem,
  DeleteTag
} from './'

export const TodoItem = ({
  text,
  completed,
  created,
  tags,
  toggleCompleted,
  deleteTodo,
  addTag,
  removeTag,
  index
}) => {
  return (
    <Draggable draggableId={created.toString()} index={index}>
      {draggableProvided => (
        <li
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          {...draggableProvided.dragHandleProps}
          className='flex gap-2 items-center justify-between px-5 py-3 w-full bg-primary-light dark:bg-primary-dark border-b border-bg-light dark:border-bg-dark'
        >
          <div className='flex gap-4 items-center'>
            <ToggleCompletedButton
              completed={completed}
              todoId={created}
              toggleCompleted={toggleCompleted}
            />
            <div className='flex flex-col gap-1'>
              <p
                className={`text-sm ${
                  completed
                    ? 'text-placeholder-dark dark:text-placeholder-dark line-through'
                    : 'text-primary-dark dark:text-primary-light'
                }`}
              >
                {text}
              </p>
              <ul className='flex gap-1 flex-wrap w-full'>
                <CreatedDate created={created} completed={completed} />
                {tags.map((tag, index) => (
                  <TagItem key={index} text={tag} className='bg-slate-500'>
                    <DeleteTag removeTag={removeTag} text={tag} id={created} />
                  </TagItem>
                ))}
                <li>
                  <CreateTag id={created} addTag={addTag} />
                </li>
              </ul>
            </div>
          </div>
          <DeleteTodo todoId={created} deleteTodo={deleteTodo} />
        </li>
      )}
    </Draggable>
  )
}
