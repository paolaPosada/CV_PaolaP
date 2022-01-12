module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1296px'},
        'xl': {'min': '1297px', 'max': '3000px'}
      }
    },
  },
  plugins: [],
}