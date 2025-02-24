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
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
