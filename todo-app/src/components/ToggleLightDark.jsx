import { useState } from 'react'
import { Sun } from './icons/Sun'
import { Moon } from './icons/Moon'
import { LightDarkButton } from './LightDarkButton'

export const ToggleLightDark = () => {
  const [selected, setSelected] = useState(true)
  const element = document.documentElement.classList

  const enableLightMode = () => {
    element.remove('dark')
    setSelected(true)
  }
  const enableDarkMode = () => {
    element.add('dark')
    setSelected(false)
  }

  return (
    <div className='bg-primary-light dark:bg-primary-dark flex gap-1 p-1 rounded-lg w-fit shadow-xl'>
      <LightDarkButton
        mode='Light'
        callback={enableLightMode}
        selected={selected}
      >
        <Sun fill='fill-dark-extra dark:fill-bg-light scale-[.6]' />
      </LightDarkButton>
      <LightDarkButton
        mode='Dark'
        callback={enableDarkMode}
        selected={!selected}
      >
        <Moon fill='fill-dark-extra dark:fill-bg-light scale-[.6]' />
      </LightDarkButton>
    </div>
  )
}
