import { StepsList } from './StepsList'
import { locations } from '../services/locations'
import { paths } from '../services/paths'

import bgDesktop from '/bg-sidebar-desktop.svg'
import bgMobile from '/bg-sidebar-mobile.svg'

export const Steps = () => {
  const { success } = paths
  const { currentPage } = locations()
  return (
    <aside className='sm:h-full relative'>
      <picture className='absolute -z-10 sm:static sm:h-full min-w-full'>
        <source
          media='(min-width: 650px)'
          srcSet={bgDesktop}
        />
        <img className='sm:h-full min-w-full' src={bgMobile} />
      </picture>
      {currentPage !== success ? (
        <StepsList />
      ) : (
        <div className='py-12'></div>
      )}
    </aside>
  )
}
