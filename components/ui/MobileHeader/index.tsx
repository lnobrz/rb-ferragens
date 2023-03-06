import Logo from "../Logo";
import MenuButton from "../MenuButton";
import { HeaderContainer, LogoContainer } from "./styles";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import { motion, AnimatePresence } from "framer-motion";

const MobileHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const showMenuHandler = () => {
    setShowMobileMenu((previousValue) => !previousValue);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo logoDirection="left" className="logo" />
      </LogoContainer>
      <MenuButton
        handleClickFunction={showMenuHandler}
        showMenuState={showMobileMenu}
      />
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MobileMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default MobileHeader;
