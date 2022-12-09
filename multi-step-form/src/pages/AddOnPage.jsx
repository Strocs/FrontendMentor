import { HeaderLayout } from '../components'
import { AddOnCard } from '../components/AddOnCard'

export const AddOnPage = ({ addons = [], yearSubs, onInputChange }) => {
  const onSelection = addonName => {
    if (addons.includes(addonName)) {
      onInputChange({
        target: {
          name: 'addons',
          value: addons.filter(addon => addon !== addonName)
        }
      })
      return
    }

    onInputChange({ target: { name: 'addons', value: [...addons, addonName] } })
  }
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
          price={yearSubs ? '+$10/yr' : '+$1/mo'}
          onSelection={onSelection}
          addons={addons}
        />
        <AddOnCard
          name='Larger storage'
          description='Extra 1TB of cloud save'
          price={yearSubs ? '+$20/yr' : '+$2/mo'}
          onSelection={onSelection}
          addons={addons}
        />
        <AddOnCard
          name='Customizable profile'
          description='Custom theme on your profile'
          price={yearSubs ? '+$20/yr' : '+$2/mo'}
          onSelection={onSelection}
          addons={addons}
        />
      </div>
    </>
  )
}
