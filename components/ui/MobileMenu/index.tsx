import { MobileMenuContainer, MenuItemsContainer } from "./styles";
import MobileMenuItem from "../MobileMenuItem";
import { MenuLinks } from "@/storage/data";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

const mobileMenuVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0,
      mass: 0.4,
      stiffness: 70,
      duration: 0.6,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const MobileMenu = () => {
  return (
    <MobileMenuContainer
      variants={mobileMenuVariants}
      initial="hidden"
      animate="visible"
      exit={{ scale: 0 }}
    >
      <MenuItemsContainer>
        {MenuLinks.map((menuLink) => {
          return (
            <Link
              key={menuLink.id}
              href={menuLink.url}
              className="mobileMenuLink"
            >
              <MobileMenuItem itemName={menuLink.name} />
            </Link>
          );
        })}
      </MenuItemsContainer>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
