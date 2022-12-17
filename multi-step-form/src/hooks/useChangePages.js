import { useNavigate } from 'react-router-dom'

export const useChangePages = (nextPage, afterSubmitPage) => {
  const navigation = useNavigate()

  const onNextPage = () => {
    navigation(nextPage)
  }

  const onGoBack = () => {
    navigation(-1, {
      replace: true
    })
  }

  const onSubmit = () => {
    navigation(afterSubmitPage, {
      replace: true
    })
  }

  return {
    onNextPage,
    onGoBack,
    onSubmit
  }
}
