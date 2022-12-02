import { Sun, Moon } from './icons'
import { ToggleDarkModeButton } from '.'
import { useDarkMode } from '../hooks'

export const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <>
      <ToggleDarkModeButton
        mode='Light'
        callback={setDarkMode}
        selected={!darkMode}
        darkMode={false}
      >
        <Sun fill='fill-dark-extra dark:fill-bg-light scale-[.6]' />
      </ToggleDarkModeButton>
      <ToggleDarkModeButton
        mode='Dark'
        callback={setDarkMode}
        selected={darkMode}
        darkMode
      >
        <Moon fill='fill-dark-extra dark:fill-bg-light scale-[.6]' />
      </ToggleDarkModeButton>
    </>
  )
}
