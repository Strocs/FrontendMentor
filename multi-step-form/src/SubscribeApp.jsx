import { useChangePages } from './hooks'
import { AsideBar, NavButtons } from './layout'
import { Router } from './routes'

export const SubscribeApp = () => {
  const { success, currentLocation } = useChangePages()

  return (
    <main className='h-full relative sm:max-w-4xl sm:w-full sm:flex sm:bg-White sm:rounded-xl sm:overflow-hidden'>
      <section>
        <AsideBar />
      </section>
      <section className='bg-White sm:bg-transparent mx-4 px-6 py-8 rounded-xl shadow-lg sm:shadow-none sm:w-full'>
        <Router />
      </section>
      {currentLocation !== success && (
        <section className='grid grid-flow-col p-4 absolute bottom-0 left-0 right-0 z-10 bg-White sm:bg-transparent'>
          <NavButtons />
        </section>
      )}
    </main>
  )
}
