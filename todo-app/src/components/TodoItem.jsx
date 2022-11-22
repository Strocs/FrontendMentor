import { CreatedDate } from './CreatedDate'
import { ToggleCompletedButton } from './ToggleCompletedButton'
import { DeleteTodoButton } from './DeleteTodoButton'
import { TodoText } from './TodoText'
import { LimitDate } from './LimitDate'

export const TodoItem = ({
  todo,
  completed,
  created,
  deadline,
  markAsComplete,
  deleteTodo,
  toggleModal
}) => {
  return (
    <li className='grid grid-flow-col items-center justify-between w-full bg-white dark:bg-dm-6 px-5 py-3 border-b dark:border-dm-4'>
      <div className='flex gap-4 items-center' onClick={() => toggleModal()}>
        <ToggleCompletedButton
          completed={completed}
          todoId={created}
          callback={markAsComplete}
        />
        <div>
          <TodoText completed={completed} todo={todo} />
          <CreatedDate created={created}>
            {deadline > 0 && <LimitDate deadline={deadline} />}
          </CreatedDate>
        </div>
      </div>
      <DeleteTodoButton todoId={created} callback={deleteTodo} />
    </li>
  )
}
