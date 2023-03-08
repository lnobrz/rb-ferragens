// components/Layout/index.js

import { motion } from "framer-motion";
import { ReactNode } from "react";

type LayoutType = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutType) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      type: "spring",
      duration: 1,
      bounce: 0,
      mass: 0.4,
      stiffness: 70,
      delayChildren: 0.1,
    }}
  >
    {children}
  </motion.div>
);
export default Layout;
