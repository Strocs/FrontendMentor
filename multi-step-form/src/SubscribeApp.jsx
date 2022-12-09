import { useChangePages } from './hooks'
import { AsideBar, NavButtons } from './layout'
import { Router } from './routes'

export const SubscribeApp = () => {
  const { success, currentLocation } = useChangePages()
  return (
    <main className='sm:flex h-full relative'>
      <section>
        <AsideBar />
      </section>
      <section className='bg-White mx-4 px-6 py-8 rounded-xl shadow-lg'>
        <Router />
      </section>
      {currentLocation !== success && (
        <section className='grid grid-flow-col p-4 absolute bottom-0 left-0 right-0 z-10 bg-White'>
          <NavButtons />
        </section>
      )}
    </main>
  )
}
