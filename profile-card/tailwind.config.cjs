/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(185, 75%, 39%)',
        desBlue: 'hsl(229, 23%, 23%)',
        grayBlue: 'hsl(227, 10%, 46%)',
        gray: 'hsl(0, 0%, 59%)'
      },
      backgroundImage: {
        card: 'url(/bg-pattern-card.svg)',
        main: 'url(/bg-pattern-top.svg), url(/bg-pattern-bottom.svg)',
      },
      backgroundSize: {
        'size-main': '62rem'
      },
      backgroundPosition: {
        'position-main': '-261px -530px, 677px 365px'
      }
    }
  },
  plugins: []
}
