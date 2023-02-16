import Image from "next/image";
import { MenuButtonContainer } from "./styles";

const MenuButton = () => {
  return (
    <MenuButtonContainer>
      <Image
        src="/images/menu-button.svg"
        alt="menu button"
        fill={true}
        className="menuButton"
      />
    </MenuButtonContainer>
  );
};

export default MenuButton;
