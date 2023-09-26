module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9a4dc1",
        secondary: "#4e90e7",
        accent: "#4f4f50",
        neutral: "#111",
        "neutral-content": "#6e6e6e",
        "base-100": "#ffffff",
      },
      fontFamily: {
        jerseyM54: ["jerseyM54"],
        dinMedium: ["dinMedium"],
      },
    },
  },
  plugins: [],
};
