import { useLocation, useNavigate } from 'react-router-dom'
import { paths } from '../routes'

export const useChangePages = () => {
  const location = useLocation()
  const navigation = useNavigate()
  const { personal, plans, addons, summary, success } = paths

  let path = '/'
  switch (location.pathname) {
    case personal:
      path = plans
      break
    case plans:
      path = addons
      break
    case addons:
      path = summary
      break
    default:
      break
  }

  const onNextPage = () => {
    navigation(path)
  }

  const onGoBack = () => {
    navigation(-1, {
      replace: true
    })
  }

  const onConfirm = () => {
    navigation(success, {
      replace: true
    })
  }

  return {
    onNextPage,
    onGoBack,
    onConfirm,
    currentLocation: location.pathname,
    ...paths
  }
}
