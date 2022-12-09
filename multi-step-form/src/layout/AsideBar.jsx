import { StepsList } from '../components'
import { useChangePages } from '../hooks'

export const AsideBar = () => {
  const { currentLocation, success } = useChangePages()
  return (
    <aside className='w-[375px] relative'>
      <picture className='absolute -z-10 w-[375px]'>
        <img className='w-[375px]' src='/images/bg-sidebar-mobile.svg' />
      </picture>
      {currentLocation !== success ? <StepsList /> : <div className='py-12'></div>}
    </aside>
  )
}
