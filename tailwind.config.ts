import { ligth } from './src/lib/theme';
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
      backgroundColor: ligth.backgroundColor,

      backgroundImage: ligth.backgroundImage,

      backgroundSize: ligth.backgroundSize,

      animation: ligth.animation,

      gridTemplateColumns: ligth.gridTemplateColumns,

      fontSize: ligth.fontSize,

      borderColor: ligth.borderColor,

      maxWidth: ligth.maxWidth,

      borderRadius: ligth.borderRadius,

      boxShadow: {
        header: 'var(--shadow-header)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
