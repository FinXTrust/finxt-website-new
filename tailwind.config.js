module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        finxt: {
          navy: '#0A0F1E',
          'navy-2': '#0D1B3E',
          'navy-3': '#162444',
          gold: '#C9A84C',
          'gold-light': '#E8C96A',
          muted: '#A9B6D3',
          border: '#1E2D50',
        },
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.25rem', { lineHeight: '1.08', letterSpacing: '-0.04em', fontWeight: '800' }],
        'section': ['1.875rem', { lineHeight: '1.15', letterSpacing: '-0.03em', fontWeight: '800' }],
      },
    },
  },

  plugins: [],
};
