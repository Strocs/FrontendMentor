import { locations, paths } from '../services'
import { StepCircle, StepItem } from './'

const { personal, planSelection, addonPicker, summary } = paths

const pagesArray = [
  { stepName: 'your info', step: 1, path: personal },
  { stepName: 'select plan', step: 2, path: planSelection },
  { stepName: 'add-ons', step: 3, path: addonPicker },
  { stepName: 'summary', step: 4, path: summary }
]

export const StepsList = () => {
  const { currentPage } = locations()
  return (
    <ul className='py-8 flex justify-center gap-4 sm:absolute sm:flex-col sm:gap-6 sm:top-0 sm:px-8'>
      {pagesArray.map(({ step, stepName, path }) => (
        <StepItem key={step} step={step} stepName={stepName}>
          <StepCircle step={step} isActive={currentPage === path} />
        </StepItem>
      ))}
    </ul>
  )
}
