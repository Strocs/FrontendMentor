import { AsideNav } from './layout/AsideNav'
import { Router } from './routes/Router'

function App () {
  return (
    <main className='sm:flex'>
      <AsideNav />
      <Router />
    </main>
  )
}

export default App
