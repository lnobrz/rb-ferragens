import Logo from "../Logo";
import MenuButton from "../MenuButton";
import { HeaderContainer, LogoContainer } from "./styles";
import { useState } from "react";
import Menu from "../Menu";
import { AnimatePresence } from "framer-motion";
import useDeviceInfo from "@/helpers/useDeviceInfo";
import MenuBudgetButton from "../MenuBudgetButton";

const Header = () => {
  const device = useDeviceInfo();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMobileMenu((previousValue) => !previousValue);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo className="logo" />
      </LogoContainer>
      {device === "mobile" && (
        <>
          <MenuButton
            handleClickFunction={showMenuHandler}
            menuIsOpened={showMobileMenu}
          />
          <AnimatePresence>
            {showMobileMenu && (
              <Menu
                disableAnimations={false}
                menuHandlerFunction={showMenuHandler}
              />
            )}
          </AnimatePresence>
        </>
      )}
      {device === "desktop" && (
        <>
          <Menu disableAnimations={true} />
          <MenuBudgetButton disableAnimations={true} />
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
