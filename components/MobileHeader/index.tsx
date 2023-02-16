import Logo from "../ui/Logo";
import MenuButton from "../ui/MenuButton";
import { HeaderContainer, LogoContainer } from "./styles";

const MobileHeader = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuButton />
    </HeaderContainer>
  );
};

export default MobileHeader;
