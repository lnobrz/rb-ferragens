import { ReactNode } from "react";
import { LayoutContainer } from "./styles";

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
  <LayoutContainer
    variants={layoutVariants}
    initial="hidden"
    animate="show"
    exit={{ opacity: 0 }}
  >
    {children}
  </LayoutContainer>
);
export default Layout;
