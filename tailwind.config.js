/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["media", "class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx, css,scss}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css,scss}",
    "./src/styles/*.{js,ts,jsx,tsx,mdx,css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2F3B24",
        secondary: "#F9F5EF",
        button: "#E36D2A",
        hover: "#73893A",
        border: "#D9CBB3",
      },
      backgroundImage: {
        hero: "url('/images/bg1.jpeg')",
      },
      fontSize: {
        xs: "0.625rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
    require("tailwindcss-animate"),
  ],
};
