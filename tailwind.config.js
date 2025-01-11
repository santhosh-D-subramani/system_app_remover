/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // primary:"#6200EE",
        primaryVariant:"#3700B3",
        // secondary:"#03DAC6",
        secondaryVariant:"#018786",
        button:"#BB86FC",
          'text': '#efebf5',
          // 'background': '#050307',
          'background': '#0b0710',
          'primary': '#7e54ab',
          'secondary': '#5c2d5a',
          'accent': '#783b64',
      
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'2rem',
          lg:'4rem',
          xl:'5rem',
          "2xl" :"6rem",
        },
      }
    },
  },
  plugins: [],
}

