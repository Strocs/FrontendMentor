import { useContext } from 'react'
import { FormContext } from '../context/FormContext'
import { PlanCard } from '../components/PlanCard'
import { ToggleButton } from '../components/ToggleButton'
import { Header } from '../components/Header'
import { PlanIcon } from '../components/PlanIcon'

export const PlanPage = () => {
  const { plan, yearSubs, onChangeValues } = useContext(FormContext)

  const onToggle = yearly => {
    onChangeValues('yearSubs', yearly)
  }
  const onSelectPlan = planName => {
    onChangeValues('plan', planName)
  }

  return (
    <>
      <Header
        title='Select your plan'
        description='You have the option of monthly or yearly billing.'
      />
      <div className='flex flex-col sm:flex-row sm:justify-around gap-2 sm:gap-4'>
        <PlanCard
          title='Arcade'
          price={yearSubs ? '$90/yr' : '$9/mo'}
          yearSubs={yearSubs}
          plan={plan}
          onSelectPlan={onSelectPlan}
          image={<PlanIcon svgName='icon-arcade' />}
        />

        <PlanCard
          title='Advanced'
          price={yearSubs ? '$120/yr' : '$12/mo'}
          yearSubs={yearSubs}
          plan={plan}
          onSelectPlan={onSelectPlan}
          image={<PlanIcon svgName='icon-advanced' />}
        />
        <PlanCard
          title='Pro'
          price={yearSubs ? '$150/yr' : '$15/mo'}
          yearSubs={yearSubs}
          plan={plan}
          onSelectPlan={onSelectPlan}
          image={<PlanIcon svgName={'icon-pro'} />}
        />
      </div>
      <ToggleButton yearSubs={yearSubs} onToggle={onToggle} />
    </>
  )
}
