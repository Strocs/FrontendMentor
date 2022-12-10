import { useChangePages } from './hooks'
import { AsideBar, NavButtons } from './layout'
import { Router } from './routes'

export const SubscribeApp = () => {
  const { success, currentLocation } = useChangePages()

  return (
    <main className='h-full relative sm:w-full sm:flex sm:bg-White sm:rounded-2xl sm:overflow-hidden sm:p-4 sm:max-h-[38rem] sm:max-w-[59rem] sm:shadow-xl'>
      <section className='sm:h-full'>
        <AsideBar />
      </section>
      <div className={`sm:relative grow sm:flex sm:flex-col sm:px-20 sm:pl-24 sm:pt-12 sm:pb-4 ${currentLocation === success ? 'sm:justify-center' : 'sm:justify-between'}`}>
        <section className='bg-White mx-4 px-6 py-8 rounded-xl shadow-lg sm:bg-transparent sm:rounded-none sm:m-0 sm:p-0 sm:shadow-none sm:w-full sm:self-center'>
          <Router />
        </section>
        {currentLocation !== success && (
          <section className='grid grid-flow-col p-4 sm:p-0 absolute sm:static bottom-0 left-0 right-0 z-10 bg-White sm:bg-transparent'>
            <NavButtons />
          </section>
        )}
      </div>
    </main>
  )
}
