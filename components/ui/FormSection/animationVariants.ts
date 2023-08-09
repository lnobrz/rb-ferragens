export const animationVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.7 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};
