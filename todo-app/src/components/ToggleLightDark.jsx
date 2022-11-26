import { Sun } from './icons/Sun'
import { Moon } from './icons/Moon'
import { LightDarkButton } from './LightDarkButton'
import { useDarkMode } from '../hooks/useDarkMode'

export const ToggleLightDark = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <>
      <LightDarkButton
        mode='Light'
        callback={setDarkMode}
        selected={!darkMode}
        darkMode={false}
      >
        <Sun fill='fill-dark-extra dark:fill-bg-light scale-[.6]' />
      </LightDarkButton>
      <LightDarkButton
        mode='Dark'
        callback={setDarkMode}
        selected={darkMode}
        darkMode
      >
        <Moon fill='fill-dark-extra dark:fill-bg-light scale-[.6]' />
      </LightDarkButton>
    </>
  )
}
