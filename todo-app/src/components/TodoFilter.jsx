import { FilterButton } from './FilterButton'

export const TodoFilter = ({ setTodoFilter }) => {
  return (
    <div className='text-sm flex gap-4 font-bold justify-center px-5 py-3 text-lm-4 dark:text-dm-3 bg-white dark:bg-dm-6 mt-4 rounded-md shadow-xl'>
      <FilterButton title='All' callback={setTodoFilter} />
      <FilterButton title='Active' callback={setTodoFilter} />
      <FilterButton title='Completed' callback={setTodoFilter} />
    </div>
  )
}
