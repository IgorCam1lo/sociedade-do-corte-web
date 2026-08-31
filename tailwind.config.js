/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sc-dark': '#181818',
        'sc-darker': '#0F0F0F',
        'sc-surface': '#1E1E1E',
        'sc-surface-light': '#262626',
        'sc-green': '#364035',
        'sc-green-light': '#455545',
        'sc-green-wall': '#2E7D5B',
        'sc-gold': '#CDB888',
        'sc-gold-light': '#D9C99E',
        'sc-gold-dark': '#B5A070',
        'sc-cement': '#403F40',
        'sc-cream': '#F5F5F0',
        'sc-cream-muted': '#E2E2DC',
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'body': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'diamond-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill='none' stroke='%23C5A88015' stroke-width='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
