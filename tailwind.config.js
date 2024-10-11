/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  important: true,
  theme: {
    extend: {
      spacing: {
        "0.56": "0.549rem",
        "fvh": "100vh"
      },
      backgroundImage: {
      'homebackground': "url('/background.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    },
      aspectRatio: {
      '5/3': '6 / 4',
    },
    },
    fontFamily: {
      'display': ['Helevetica', 'sans serif' ],
      'body': ['"Arial', 'Helvetica', 'sans serif'],
    },
    animation: {
      spin: 'spin 5s linear infinite',
      bounce: 'bounce 1s infinite'
    }
  },
  plugins: [
    function({ addBase }) {
      addBase({
        ':root': {
          scrollBehavior: 'smooth',
        },
        "*":{
          userSelect: "none",
          boxSizing: "border-box",
          
        }
      });
    },
  ],
}

