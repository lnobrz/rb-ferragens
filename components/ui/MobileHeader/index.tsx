import Logo from "../Logo";
import MenuButton from "../MenuButton";
import { HeaderContainer, LogoContainer } from "./styles";

const MobileHeader = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo logoDirection="left" className="logo" />
      </LogoContainer>
      <MenuButton />
    </HeaderContainer>
  );
};

export default MobileHeader;
