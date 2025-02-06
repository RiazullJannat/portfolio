import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        root:"#6c584c",
        sectionBg:'#BC8A5F',
        h_text:'#8B5E34',
        l_text:'#F3D5B5',
      },
    },
  },
  plugins: [daisyui],
};
