/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: 'hsl(0, 78%, 62%)',
        cyan: 'hsl(180, 62%, 55%)',
        orange: 'hsl(34, 97%, 64%)',
        blue: 'hsl(212, 86%, 64%)',
        colorTitles: 'hsl(234, 12%, 34%)',
        colorParagraph: 'hsl(229, 6%, 66%)',
        colorBG: 'hsl(0, 0%, 98%)'
      }
    }
  },
  plugins: []
}
