import { useEffect } from 'react'
import { useLocalStorage, useMedia } from './'

export const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled')
  const prefersDarkMode = usePrefersDarkMode()
  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode

  useEffect(() => {
    const className = 'dark'
    const element = document.documentElement.classList
    if (enabled) {
      element.add(className)
    } else {
      element.remove(className)
    }
  }, [enabled])

  return [enabled, setEnabledState]
}
const usePrefersDarkMode = () => {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false)
}
