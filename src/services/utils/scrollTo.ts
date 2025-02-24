export const scrollTo = (section: string) => {
  const element = document.getElementById(section);
  if (window && element) {
    window.scrollTo({
      top: element?.offsetTop,
      behavior: 'smooth',
    });
  }
};
