/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'Bright-Blue': 'hsl(220, 98%, 61%)',
        'Gradient-1': 'hsl(192, 100%, 67%)',
        'Gradient-2': 'hsl(280, 87%, 65%)',

        'lm-1': 'hsl(0, 0%, 98%)',
        'lm-2': 'hsl(236, 33%, 92%)',
        'lm-3': 'hsl(233, 11%, 84%)',
        'lm-4': 'hsl(236, 9%, 61%)',
        'lm-5': 'hsl(235, 19%, 35%)',

        'dm-1': 'hsl(236, 33%, 92%)',
        'dm-2': 'hsl(233, 10%, 85%)',
        'dm-3': 'hsl(233, 10%, 75 %)',
        'dm-4': 'hsl(240, 2%, 30%)',
        'dm-5': 'hsl(240, 2%, 20%)',
        'dm-6': 'hsl(240, 2%, 15%)',
        'dm-7': 'hsl(240, 2%, 10%)'
      }
    }
  },
  plugins: []
}
