module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        dark: '#131312',
      },
      zIndex: {
        '-1': '-1',
      },
      spacing: {
        '1/1': '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
