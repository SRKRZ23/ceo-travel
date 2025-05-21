/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Deep Blue
        secondary: '#D4A017', // Golden Yellow
        text: '#4B5563', // Gray for text
        accent: '#10B981', // Green for accents
        background: '#F9FAFB', // Light background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern font for body text
        heading: ['Montserrat', 'sans-serif'], // Font for headings
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'deep': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}

