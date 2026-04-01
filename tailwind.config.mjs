/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        surface: {
          DEFAULT: '#0f1419',
          raised: '#161d27',
          border: '#243041',
        },
        accent: {
          DEFAULT: '#22d3ee',
          muted: '#0891b2',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
