import Logo from "../Logo";
import MenuButton from "../MenuButton";
import { HeaderContainer, LogoContainer } from "./styles";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import CloseMenuButton from "@/components/CloseMenuButton";
import { AnimatePresence } from "framer-motion";
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
      {showMobileMenu ? (
        <CloseMenuButton handleClickFunction={showMenuHandler} />
      ) : (
        <MenuButton handleClickFunction={showMenuHandler} />
      )}
      <AnimatePresence>{showMobileMenu && <MobileMenu />}</AnimatePresence>
    </HeaderContainer>
  );
};

export default MobileHeader;
