/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pokemon-primary': '#2C6BE0',
        'pokemon-secondary': '#333333',
        'pokemon-accent': '#4CD964',
        'pokemon-electric': '#FFD84D',
        'pokemon-water': '#3399FF',
        'pokemon-fire': '#FF6B57',
        // Type colors
        'type-normal': '#A8A878',
        'type-fire': '#F08030',
        'type-water': '#6890F0',
        'type-grass': '#78C850',
        'type-electric': '#F8D030',
        'type-ice': '#98D8D8',
        'type-fighting': '#C03028',
        'type-poison': '#A040A0',
        'type-ground': '#E0C068',
        'type-flying': '#A890F0',
        'type-psychic': '#F85888',
        'type-bug': '#A8B820',
        'type-rock': '#B8A038',
        'type-ghost': '#705898',
        'type-dragon': '#7038F8',
        'type-dark': '#705848',
        'type-steel': '#B8B8D0',
        'type-fairy': '#EE99AC',
      }
    },
  },
  plugins: [],
}
