import { StepsList } from '../components'
import { useChangePages } from '../hooks'

export const AsideBar = () => {
  const { currentLocation, success } = useChangePages()
  return (
    <aside className='sm:h-full relative'>
      <picture className='absolute -z-10 sm:static sm:h-full'>
        <source
          media='(min-width: 650px)'
          srcSet='/images/bg-sidebar-desktop.svg'
        />
        <img className='sm:h-full' src='/images/bg-sidebar-mobile.svg' />
      </picture>
      {currentLocation !== success ? (
        <StepsList />
      ) : (
        <div className='py-12'></div>
      )}
    </aside>
  )
}
