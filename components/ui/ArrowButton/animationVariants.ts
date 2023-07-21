export const animationVariants = {
  hidden: {
    opacity: 0,
    x: "-5vh",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0,
      stiffness: 50,
    },
  },
};
