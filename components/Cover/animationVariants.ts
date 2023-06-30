export const animationVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      stiffness: 50,
      delayChildren: 0.3,
    },
  },
};
