import Image from "next/image";
import { MenuButtonContainer } from "./styles";

type MenuButtonTypes = {
  showMenuState: boolean;
  handleClickFunction(): void;
};

const MenuButton = ({
  showMenuState,
  handleClickFunction,
}: MenuButtonTypes) => {
  return (
    <MenuButtonContainer onClick={handleClickFunction}>
      <Image
        src={`/images/${
          showMenuState ? "close-button.svg" : "menu-button.svg"
        }`}
        alt="menu button"
        fill={true}
        className="menuButton"
      />
    </MenuButtonContainer>
  );
};

export default MenuButton;
