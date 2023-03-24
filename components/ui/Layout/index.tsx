// components/Layout/index.js

import { motion } from "framer-motion";
import { ReactNode } from "react";

type LayoutType = {
  children: ReactNode;
};

const layoutVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "string",
      mass: 100,
      stiffness: 1,
    },
  },
};
const Layout = ({ children }: LayoutType) => (
  <motion.div
    variants={layoutVariants}
    initial="hidden"
    animate="show"
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
);
export default Layout;
