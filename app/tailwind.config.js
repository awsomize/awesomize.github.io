/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        purpleGlassBg: 'rgba(110, 64, 170, 0.12)',
        purpleGlassBorder: 'rgba(168, 85, 247, 0.35)',
        purpleAccent: '#a855f7',
        purpleAccentMuted: '#7c3aed',
        surface: 'rgba(18, 18, 22, 0.8)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 1px 0 rgba(255,255,255,0.05) inset, 0 0 0 1px rgba(255,255,255,0.04) inset, 0 8px 24px rgba(0,0,0,0.35)'
      },
      borderRadius: {
        xl: '16px',
        '2xl': '24px',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
}
