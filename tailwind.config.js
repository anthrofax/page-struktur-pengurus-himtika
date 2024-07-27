import flowbitePlugin from "flowbite/plugin";
import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00AEE2",
        secondary: "#26C5E6",
        tertiary: "#FDF722",
        white2: "#F4F4F5",
      },
      screens: {
        xs: "425px",
      },
      fontFamily: {
        figtree: ['"Figtree"'],
      },
    },
  },
  plugins: [ flowbite.plugin()],
};
