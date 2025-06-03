/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        royalbyte: {
          900: '#10122E',
          800: '#274C77',
          600: '#3C91E6',
          300: '#90C2E7',
          100: '#D2E5F5',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'var(--font-space-grotesk)', 'var(--font-jetbrains-mono)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        zoomIn: 'zoomIn 0.2s ease forwards',
      },
    },
  },
  plugins: [],
}; 