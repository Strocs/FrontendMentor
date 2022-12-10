import { StepCircle, StepLayout } from './'

const pagesArray = [
  { stepName: 'your info', step: 1, path: 'personal-info' },
  { stepName: 'select plan', step: 2, path: 'plan-selection' },
  { stepName: 'add-ons', step: 3, path: 'addon-picker' },
  { stepName: 'summary', step: 4, path: 'summary' }
]

export const StepsList = () => {
  return (
    <ul className='py-8 flex justify-center gap-4 sm:absolute sm:flex-col sm:gap-6 sm:top-0 sm:px-8'>
      {pagesArray.map(({ step, stepName, path }) => (
        <StepLayout step={step} stepName={stepName}>
          <StepCircle path={`subscription/${path}`} step={step} />
        </StepLayout>
      ))}
    </ul>
  )
}
