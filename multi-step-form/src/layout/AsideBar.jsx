import { StepsList } from '../components'
import { useChangePages } from '../hooks'

export const AsideBar = () => {
  const { currentLocation, success } = useChangePages()
  return (
    <aside className='w-full relative'>
      <picture className='absolute -z-10 sm:z-0 sm:h-full w-full'>
        <source
          media='(min-width: 650px)'
          srcSet='/images/bg-sidebar-desktop.svg'
        />
        <img className='w-full' src='/images/bg-sidebar-mobile.svg' />
      </picture>
      {currentLocation !== success ? (
        <StepsList />
      ) : (
        <div className='py-12'></div>
      )}
    </aside>
  )
}
