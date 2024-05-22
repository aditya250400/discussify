/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        secondary: '#64748b',
        bluePrimary: '#007AFF',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
};
