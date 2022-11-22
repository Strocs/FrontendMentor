/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'Gradient-1': 'hsl(195, 80%, 70%)',
        'Gradient-2': 'hsl(275, 80%, 70%)',

        'lm-2': 'hsl(0, 0%, 95%)',
        'lm-3': 'hsl(233, 10%, 85%)',
        'lm-4': 'hsl(240, 10%, 60%)',
        'lm-5': 'hsl(240, 5%, 25%)',

        'dm-2': 'hsl(236, 33%, 92%)',
        'dm-3': 'hsl(233, 5%, 65%)',
        'dm-4': 'hsl(240, 2%, 30%)',
        'dm-5': 'hsl(240, 2%, 20%)',
        'dm-6': 'hsl(240, 2%, 15%)',
        'dm-7': 'hsl(240, 2%, 10%)'
      }
    }
  },
  plugins: []
}
