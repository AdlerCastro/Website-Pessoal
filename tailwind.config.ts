import { light } from './src/lib/theme';
import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.stories.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: light.fontFamily,
      backgroundColor: light.backgroundColor,
      backgroundImage: light.backgroundImage,
      backgroundSize: light.backgroundSize,
      animation: light.animation,
      gridTemplateColumns: light.gridTemplateColumns,
      fontSize: light.fontSize,
      borderColor: light.borderColor,
      maxWidth: light.maxWidth,
      borderRadius: light.borderRadius,
      boxShadow: {
        header: 'var(--shadow-header)',
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#1e1b4b',
        },
        accent: '#a5b4fc',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
