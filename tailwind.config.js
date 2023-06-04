/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors:{
        'orange-btn' : '#FF9500',
        'creme' : '#af9c7f',
        'total' : '#6b6666',
        'dark-gray-btn' : '#505050',
        'light-gray' : '#D4D4D2'
        }        
    },
  },
  plugins: [],
}

