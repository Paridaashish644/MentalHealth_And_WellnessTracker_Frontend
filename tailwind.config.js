/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelPurple: "#D9CFFC",
        pastelMint: "#C8F3E1",
        pastelPeach: "#FFE4D6",
        darkBg: "#0f0f11",
        darkCard: "#1b1b1f",
        neonMint: "#7FFFD4",
        neonPurple: "#C77DFF",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        blob: "blob 7s infinite",
        "blob-delay-2": "blob 7s infinite 2s",
        "blob-delay-4": "blob 7s infinite 4s",
        float: "float 3s ease-in-out infinite",
        "float-delay-2": "float 3s ease-in-out infinite 2s",
      },
    },
  },
  plugins: [],
};
