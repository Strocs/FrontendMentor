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
  removeTag,
  isDragging,
  handleDragging
}) => {
  const handleDragEnd = () => {
    handleDragging(false)
  }

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text', `${created}`)
    handleDragging(true)
  }
  return (
    <li
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      className={`flex gap-2 items-center justify-between px-5 py-3 w-full bg-primary-light dark:bg-primary-dark border-b border-bg-light dark:border-bg-dark ${isDragging ? 'opacity-25' : 'opacity-100'}`}
    >
      <div className='flex gap-4 items-center'>
        <ToggleCompletedButton
          completed={completed}
          todoId={created}
          callback={markAsComplete}
        />
        <div className='flex flex-col gap-1'>
          <TodoText completed={completed} text={text} />
          <ul className='flex gap-1 flex-wrap w-full'>
            <CreatedDate created={created} completed={completed} />
            {tags.map((tag, index) => (
              <Tags key={index} text={tag} className='bg-slate-500'>
                <DeleteTagButton
                  removeTag={removeTag}
                  text={tag}
                  id={created}
                />
              </Tags>
            ))}
            <li>
              <TagInput id={created} addTag={addTag} />
            </li>
          </ul>
        </div>
      </div>
      <DeleteTodoButton todoId={created} callback={deleteTodo} />
    </li>
  )
}
