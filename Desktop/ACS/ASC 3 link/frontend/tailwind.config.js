/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD",
        secondary: "#0B1B2B",
        accent: "#22D3EE",
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};

