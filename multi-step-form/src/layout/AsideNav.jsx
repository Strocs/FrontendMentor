import { StepCircle, StepLayout } from '../components'

export const AsideNav = () => {
  return (
    <aside className='flex justify-center p-8 pb-24 gap-4 bg-sidebar-mobile bg-Purplish-blue'>
      <StepLayout>
        <StepCircle path='subscription/personal-info' step='1' />
      </StepLayout>
      <StepLayout>
        <StepCircle path='subscription/plan-selection' step='2' />
      </StepLayout>
      <StepLayout>
        <StepCircle path='subscription/addon-picker' step='3' />
      </StepLayout>
      <StepLayout>
        <StepCircle path='subscription/summary' step='4' />
      </StepLayout>
    </aside>
  )
}
