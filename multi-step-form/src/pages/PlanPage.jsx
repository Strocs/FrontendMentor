import { PlanCard, ToggleButton, HeaderLayout, PlanIcon } from '../components'
export const PlanPage = ({ plan, yearSubs, onInputChange }) => {

  const onToggle = yearly => {
    onInputChange({ target: { name: 'yearSubs', value: yearly } })
  }
  const onSelectPlan = planName => {
    onInputChange({ target: { name: 'plan', value: planName } })
  }

  return (
    <>
      <HeaderLayout
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
