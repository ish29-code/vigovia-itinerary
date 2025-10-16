/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ✅ explicitly define Tailwind colors using rgb() (not oklch)
        primary: "rgb(74, 30, 158)", // your purple
        secondary: "rgb(90, 178, 240)", // your sky blue
      },
    },
  },
  plugins: [],
};

