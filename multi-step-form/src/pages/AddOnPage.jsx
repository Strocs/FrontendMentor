import { useContext } from 'react'
import { Header, AddonCard } from '../components'
import { FormContext } from '../context/formContext'

export const AddonPage = () => {
  const { addons, yearSubs, onChangeValues } = useContext(FormContext)

  const onSelection = addonName => {
    if (addons.includes(addonName)) {
      onChangeValues(
        'addons',
        addons.filter(addon => addon !== addonName)
      )
      return
    }
    onChangeValues('addons', [...addons, addonName])
  }
  return (
    <>
      <Header
        title='Pck add-ons'
        description='Add-ons help enhance your gaming experience.'
      />
      <div className='flex flex-col gap-3'>
        <AddonCard
          name='Online service'
          description='Access to multiplayer games'
          price={yearSubs ? '+$10/yr' : '+$1/mo'}
          onSelection={onSelection}
          addons={addons}
        />
        <AddonCard
          name='Larger storage'
          description='Extra 1TB of cloud save'
          price={yearSubs ? '+$20/yr' : '+$2/mo'}
          onSelection={onSelection}
          addons={addons}
        />
        <AddonCard
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
