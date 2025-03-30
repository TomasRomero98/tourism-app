/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/styles/*.{js,ts,jsx,tsx,mdx,scss}",
  ],
  theme: {
    extend: {
      //VARIABLES
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ffffff",
        secondary: "#000000",
      },
      fontSize: {
        xs: "0.625rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
      },
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
