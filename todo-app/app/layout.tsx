import './globals.css'
import React from 'react'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <title>Frontend Mentor | Todo app</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='icon' href='/favicon-32x32.png' />
      <body>{children}</body>
    </html>
  )
}
