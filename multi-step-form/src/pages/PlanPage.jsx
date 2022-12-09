import { useState } from 'react'
import { PlanCard, ToggleButton, HeaderLayout, PlanIcon } from '../components'
export const PlanPage = () => {
  const [isYearly, setIsYearly] = useState(false)
  const [plan, setPlan] = useState('')
  const onToggle = () => {
    setIsYearly(!isYearly)
  }
  const onSelectPlan = planName => {
    setPlan(planName)
  }
  return (
    <>
      <HeaderLayout
        title='Select your plan'
        description='You have the option of monthly or yearly billing.'
      />
      <div className='flex flex-col gap-2'>
        <PlanCard
          title='Arcade'
          price={isYearly ? '$90/yr' : '$9/mo'}
          isYearly={isYearly}
          plan={plan}
          onSelectPlan={onSelectPlan}
          image={<PlanIcon svgName='icon-arcade' />}
        />

        <PlanCard
          title='Advanced'
          price={isYearly ? '$120/yr' : '$12/mo'}
          isYearly={isYearly}
          plan={plan}
          onSelectPlan={onSelectPlan}
          image={<PlanIcon svgName='icon-advanced' />}
        />
        <PlanCard
          title='Pro'
          price={isYearly ? '$150/yr' : '$15/mo'}
          isYearly={isYearly}
          plan={plan}
          onSelectPlan={onSelectPlan}
          image={<PlanIcon svgName={'icon-pro'} />}
        />
      </div>
      <ToggleButton isYearly={isYearly} onToggle={onToggle} />
    </>
  )
}
