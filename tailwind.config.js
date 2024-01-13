/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        notoSans: "Noto Sans",
        notoSerif: "Noto Serif",
        display: ["Bebas Neue", "sans-serif"],
      },
      backgroundImage: {
        // custom background images
        frontDoor:
          "url('https://marksmanexteriors.com/cdn-cgi/imagedelivery/XvH0UEoGmg1LgCBcC8XRgw/8d1dfa22-0e73-40e2-2edf-3218fede6400/public')",
      },
    },
  },
  plugins: [],
};
