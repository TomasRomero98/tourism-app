/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "@/components/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "@/app/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "@/styles/*.{js,ts,jsx,tsx,mdx,scss}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // whats this for?
        foreground: "var(--foreground)", // whats this for?
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
