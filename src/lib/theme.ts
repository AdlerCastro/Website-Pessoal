import { ThemeType } from '@/types/theme.type';

export const ligth: ThemeType = {
  colors: {
    white_100: '#F4EFEF',
    red_wf: '#680101',
    red_toast: '#DF1515',
    yellow_toast: '#C6A45B',
    yellow_100: '#FFD456',
    yellow_200: '#B39642',
    yellow_300: '#7C682E',
    black_100: '#ffffff',
    green_100: '#00DA5F',
    green_200: '#009742',
    green_300: '#025828',
    gray_100: '#383838',
  },
  fontFamily: {
    Poppins: ['var(--font-poppins)', 'sans-serif'],
    Roboto: ['var(--font-roboto)', 'sans-serif'],
  },
  backgroundColor: {
    default: 'var(--background-color-default)',
  },
  backgroundImage: {
    about: 'var(--background-color-about)',
    hero: 'var(--background-color-hero)',
    projects: 'var(--background-color-projects)',
    'image-project': 'var(--background-color-image-project)',
    borderNav: 'var(--color-border-nav)',
    technologies: 'var(--background-color-tech)',
  },
  backgroundSize: {
    sizeHero: 'var(--background-size-hero)',
  },
  animation: {
    bgHero: 'var(--animation-bg-hero)',
    animationBorderNav: 'var(--animation-border-nav)',
    bgImageProject: 'var(--animation-bg-image-project)',
  },
  gridTemplateColumns: {
    dashboard: '300px 1fr',
  },
  fontSize: {
    '2xs': '0.625rem',
  },
  borderColor: {
    paragraph: 'var(--boder-color-paragraph)',
  },
  maxWidth: {
    paragraph: 'var(--max-width-paragraph)',
    listItems: 'var(--max-width-list-items)',
  },
  borderRadius: {
    lg: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    sm: 'calc(var(--radius) - 4px)',
  },
};
