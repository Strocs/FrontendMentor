/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'Gradient-1': 'hsl(195, 80%, 70%)',
        'Gradient-2': 'hsl(275, 80%, 70%)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--primary-dark)',
        'bg-light': 'var(--bg-light)',
        'bg-dark': 'var(--bg-dark)',
        'placeholder-light': 'var(--placeholder-light)',
        'placeholder-dark': 'var(--placeholder-dark)',
        'dark-extra': 'var(--dark-extra)'
      }
    }
  },
  plugins: []
}
