import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { FeaturesApp } from '../pages/index.page'
import './globals.css'

export async function render () {
  hydrateRoot(
    document.getElementById('root'),
    <React.StrictMode>
      <FeaturesApp />
    </React.StrictMode>
  )
}
