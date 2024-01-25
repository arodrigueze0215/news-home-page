import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '360px',
      xl: '1440px',
    },
    colors: {
      'white': '#FFF',
      'black': '#00001A',
      'tomato': '#ED604F',
      'mustard': '#E4A349',
      'gray-dark': '#727272',
      'gray-light': '#DDD',
    },
    fontFamily: {
      inter: ['inter', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
export default config
