module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'meals-panda-base': '#00285c',
        'meals-panda-light': '#62a1f5',
      },
      backgroundImage: {
        'home-bg': "url('/src/images/home-bg.jpg')"
      }
    },
  },
  plugins: [],
}
