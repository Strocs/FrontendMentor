import { StepCircle, StepLayout } from './'

export const StepsList = () => {
  return (
    <ul className='py-8 flex justify-center gap-4'>
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
    </ul>
  )
}
