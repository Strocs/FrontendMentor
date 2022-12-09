import { HeaderLayout } from '../components'
import { AddOnCard } from '../components/AddOnCard'

export const AddOnPage = () => {
  return (
    <>
      <HeaderLayout
        title='Pck add-ons'
        description='Add-ons help enhance your gaming experience.'
      />
      <div className='flex flex-col gap-3'>
        <AddOnCard
          name='Online service'
          description='Access to multiplayer games'
          price='+$1/mo'
        />
        <AddOnCard
          name='Larger storage'
          description='Extra 1TB of cloud save'
          price='+$1/mo'
        />
        <AddOnCard
          name='Customizable profile'
          description='Custom theme on your profile'
          price='+$1/mo'
        />
      </div>
    </>
  )
}
