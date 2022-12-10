/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'Marine-blue': 'hsl(213, 96%, 18%)',
        'Marine-blue-light': 'hsl(213, 90%, 30%)',
        'Purplish-blue': 'hsl(243, 100%, 62%)',
        'Purplish-blue-light': 'hsl(243, 80%, 72%)',
        'Pastel-blue': 'hsl(228, 100%, 84%)',
        'Light-blue': 'hsl(206, 94%, 87%)',
        'Strawberry-red': 'hsl(354, 84%, 57%)',
        'Cool-gray': 'hsl(231, 15%, 70%)',
        'Light-gray': 'hsl(229, 24%, 87%)',
        Magnolia: 'hsl(215, 100%, 97%)',
        Alabaster: 'hsl(231, 100%, 99%)',
        White: 'hsl(255, 100%,100%)'
      },
      backgroundImage: {
        'sidebar-mobile': "url('/images/bg-sidebar-mobile.svg')",
        'sidebar-desktop': "url('/images/bg-sidebar-desktop.svg')"
      }
    }
  },
  plugins: []
}
