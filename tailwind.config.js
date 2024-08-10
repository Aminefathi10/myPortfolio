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
      'dark-bg': "url('https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?cs=srgb&amp;dl=pexels-eberhardgross-2098427.jpg&amp;fm=jpg')",
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

