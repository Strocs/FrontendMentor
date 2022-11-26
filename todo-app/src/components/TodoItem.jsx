import { CreatedDate } from './CreatedDate'
import { ToggleCompletedButton } from './ToggleCompletedButton'
import { DeleteTodoButton } from './DeleteTodoButton'
import { TodoText } from './TodoText'
import { TagInput } from './TagInput'
import { Tags } from './Tags'
import { DeleteTagButton } from './DeleteTagButton'

export const TodoItem = ({
  text,
  completed,
  created,
  tags,
  markAsComplete,
  deleteTodo,
  addTag,
  removeTag
}) => {
  return (
    <li
      draggable
      className='flex flex-col items-center w-full bg-primary-light dark:bg-primary-dark border-b border-bg-light dark:border-bg-dark'
    >
      <div className='flex flex-col gap-1 w-full px-5 pb-3 pt-2'>
        <div className='flex gap-2 items-center justify-between'>
          <div className='flex gap-4 items-center'>
            <ToggleCompletedButton
              completed={completed}
              todoId={created}
              callback={markAsComplete}
            />
            <TodoText completed={completed} text={text} />
          </div>
          <DeleteTodoButton todoId={created} callback={deleteTodo} />
        </div>
        <ul className='flex gap-1 flex-wrap w-full ml-9'>
          <CreatedDate created={created} completed={completed} />
          {tags.map((tag, index) => (
            <Tags key={index} text={tag} className='bg-slate-500'>
              <DeleteTagButton removeTag={removeTag} text={tag} id={created} />
            </Tags>
          ))}
          <TagInput id={created} addTag={addTag} />
        </ul>
      </div>
    </li>
  )
}
