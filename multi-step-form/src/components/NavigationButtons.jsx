import { Button } from '.'
import { paths, locations } from '../services'
import { useChangePages } from '../hooks/useChangePages'
import { useValidateChangePage } from '../hooks'

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
