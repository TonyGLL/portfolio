/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B7BE4', // azul botones
        subtle: '#f4f6f8', // bg cards / off-white
        'muted-text': '#6b7280',
      },
      boxShadow: {
        card: '0 6px 20px rgba(15, 23, 42, 0.06)',
        'card-strong': '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        'lg-2': '14px',
      },
    },
  },
  plugins: [],
};
