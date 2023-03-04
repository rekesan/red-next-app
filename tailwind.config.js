/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        side2side: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-10px)" },
          "75%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        side2side: "side2side 200ms ease-in-out",
        ping2: "ping 750ms cubic-bezier(0, 0, 0.2, 1) 1",
      },
    },
  },
  plugins: [],
};
