import { Button } from '../components'
import { useChangePages } from '../hooks/useChangePages'

export const NavButtons = () => {
  const {
    onGoBack,
    onNextPage,
    onConfirm,
    currentLocation,
    personal,
    summary
  } = useChangePages()

  return (
    <>
      {currentLocation !== personal && (
        <Button content='Go Back' onClick={onGoBack} />
      )}
      {currentLocation !== summary ? (
        <Button content='Next Step' onClick={onNextPage} />
      ) : (
        <Button content='Confirm' onClick={onConfirm} />
      )}
    </>
  )
}
