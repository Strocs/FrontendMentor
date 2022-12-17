import { paths } from './paths'
import { useLocation } from 'react-router-dom'

export const locations = () => {
  const location = useLocation()
  const currentPage = location.pathname
  let nextPage = ''
  const { personal, planSelection, addonPicker, summary } = paths

  switch (currentPage) {
    case personal:
      nextPage = planSelection
      break
    case planSelection:
      nextPage = addonPicker
      break
    case addonPicker:
      nextPage = summary
      break
    default:
      break
  }

  return {
    currentPage,
    nextPage
  }
}
