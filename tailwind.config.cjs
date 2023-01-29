/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        header: "0 12px 20px 6px rgb(104 112 118 / 0.08)",
      },
      height: {
        header: "calc(100vh - 76px)",
      },
      fontSize: {
        header: "clamp(1.5rem, 13vw, 60rem)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
