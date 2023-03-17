import Logo from "../Logo";
import MenuButton from "../MenuButton";
import { HeaderContainer, LogoContainer } from "./styles";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import CloseMenuButton from "@/components/CloseMenuButton";
import { AnimatePresence } from "framer-motion";
import useDeviceInfo from "@/hooks/useDeviceInfo";

const MobileHeader = () => {
  const device = useDeviceInfo();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const showMenuHandler = () => {
    setShowMobileMenu((previousValue) => !previousValue);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo logoDirection="left" className="logo" />
      </LogoContainer>
      {device === "mobile" && showMobileMenu ? (
        <>
          <CloseMenuButton handleClickFunction={showMenuHandler} />
          <AnimatePresence>
            {showMobileMenu && <MobileMenu disableAnimations={false} />}
          </AnimatePresence>
        </>
      ) : device === "mobile" && !showMobileMenu ? (
        <MenuButton handleClickFunction={showMenuHandler} />
      ) : (
        <MobileMenu disableAnimations={true} />
      )}
      <button
        style={{
          width: "100px",
          height: "40px",
          background: "red",
          color: "white",
        }}
      >
        Teste
      </button>
    </HeaderContainer>
  );
};

export default MobileHeader;
