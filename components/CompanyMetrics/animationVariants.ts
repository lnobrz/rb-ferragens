export const metricsVariants = {
  hidden: {
    scale: 0,
    y: -20,
  },
  show: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      mass: 0.4,
      stiffness: 70,
      staggerChildren: 0.1,
    },
  },
};
