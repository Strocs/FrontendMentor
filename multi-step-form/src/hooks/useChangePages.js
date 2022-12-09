import { useLocation, useNavigate } from 'react-router-dom'
import { paths } from '../routes'

export const useChangePages = () => {
  const location = useLocation()
  const navigation = useNavigate()
  const { personal, planSelection, addonPicker, summary, success } = paths

  let path = '/'
  switch (location.pathname) {
    case personal:
      path = planSelection
      break
    case planSelection:
      path = addonPicker
      break
    case addonPicker:
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
