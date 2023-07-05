export const mobileVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
      mass: 0.1,
      stiffness: 50,
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

export const desktopVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      mass: 0.1,
      stiffness: 50,
    },
  },
};
