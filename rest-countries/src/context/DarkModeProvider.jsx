import { createContext, useEffect, useState } from 'react'

export const DarkModeContext = createContext(null)

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.body.className = 'dark'
    } else {
      document.body.className = 'light'
    }
  }, [isDarkMode])
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
