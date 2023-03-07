import Logo from "../Logo";
import MenuButton from "../MenuButton";
import { HeaderContainer, LogoContainer } from "./styles";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import CloseMenuButton from "@/components/CloseMenuButton";

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
        <>
          <CloseMenuButton handleClickFunction={showMenuHandler} />
          <MobileMenu />
        </>
      ) : (
        <MenuButton handleClickFunction={showMenuHandler} />
      )}
    </HeaderContainer>
  );
};

export default MobileHeader;
