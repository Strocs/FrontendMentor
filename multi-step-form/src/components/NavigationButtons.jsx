import { Button } from './Button'
import { paths} from '../services/paths'
import { locations } from '../services/locations'
import { useChangePages } from '../hooks/useChangePages'
import { useValidateChangePage } from '../hooks/useValidateChangePage'

export const NavigationButtons = () => {
  const { nextPage, currentPage } = locations()
  const { personal, summary, success } = paths
  const { onGoBack, onNextPage, onSubmit } = useChangePages(nextPage, success)
  const {onValidateChangePage, animation} = useValidateChangePage(onNextPage)

  return (
    <>
      {currentPage !== personal && (
        <Button content='Go Back' onClick={onGoBack} />
      )}
      {currentPage !== summary ? (
        <Button
          content='Next Step'
          onClick={onValidateChangePage}
          animate={animation}
        />
      ) : (
        <Button content='Confirm' onClick={onSubmit} />
      )}
    </>
  )
}
