export type ThemeType = {
  colors: {
    white_100: string;
    red_wf: string;
    red_toast: string;
    yellow_toast: string;
    yellow_100: string;
    yellow_200: string;
    yellow_300: string;
    black_100: string;
    green_100: string;
    green_200: string;
    green_300: string;
    gray_100: string;
  };
  fontFamily: {
    Poppins: [string, string];
    Roboto: [string, string];
  };
  backgroundColor: {
    default: string;
  };
  backgroundImage: {
    borderNav: string;
    about: string;
    hero: string;
    projects: string;
    'image-project': string;
    technologies: string;
  };
  backgroundSize: {
    sizeHero: string;
  };
  animation: {
    bgHero: string;
    animationBorderNav: string;
    bgImageProject: string;
  };
  gridTemplateColumns: {
    dashboard: string;
  };
  fontSize: {
    '2xs': string;
  };
  borderColor: {
    paragraph: string;
  };
  maxWidth: {
    paragraph: string;
    listItems: string;
  };
  borderRadius: {
    lg: string;
    md: string;
    sm: string;
  };
};
