import { StepsList } from './StepsList'
import { locations } from '../services/locations'
import { paths } from '../services/paths'

export const Steps = () => {
  const { success } = paths
  const { currentPage } = locations()
  return (
    <aside className='sm:h-full relative'>
      <picture className='absolute -z-10 sm:static sm:h-full min-w-full'>
        <source
          media='(min-width: 650px)'
          srcSet='/images/bg-sidebar-desktop.svg'
        />
        <img className='sm:h-full min-w-full' src='/images/bg-sidebar-mobile.svg' />
      </picture>
      {currentPage !== success ? (
        <StepsList />
      ) : (
        <div className='py-12'></div>
      )}
    </aside>
  )
}
