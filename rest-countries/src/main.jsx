import React from 'react'
import ReactDOM from 'react-dom/client'
import { DarkModeProvider } from './context/DarkModeProvider'
import { RestCountriesApp } from './RestCountriesApp'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <RestCountriesApp />
    </DarkModeProvider>
  </React.StrictMode>
)
