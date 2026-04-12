export default () => {
  return {
    navLinkStyle:
      'text-white text-sm font-noto hover:text-white/60 relative p-1 z-10 transition duration-200 cursor-pointer',
    footerLinkStyle:
      'text-white/90 text-base font-opensans hover:text-white/60 relative py-1 z-10 transition duration-200 cursor-pointer',
    container: 'max-w-full sm:max-w-3xl lg:max-w-368 mx-auto px-5 md:px-5',
    transition: 'transition ease-out duration-300 ',
    heading:
      'font-opensans text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-accent',
    subHeading:
      'font-opensans text-2xl md:text-4xl font-bold tracking-[-0.03em] text-muted-foreground',
    paragraph: 'font-poppins text-sm md:text-base text-muted-foreground',
  };
};
