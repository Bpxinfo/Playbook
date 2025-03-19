/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "0% 50%",
          },
          to: {
            backgroundPosition: "100% 50%",
          },
        },
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
    },
  },
  plugins: [],
}