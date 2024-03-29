import Image from "next/image";
import { MenuButtonContainer } from "./styles";

type MenuButtonTypes = {
  handleClickFunction: () => void;
  menuIsOpened: boolean;
};

const mobileHeaderVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.6,
      bounce: 0,
      mass: 0.4,
      stiffness: 70,
    },
  },
};

const MenuButton = ({ handleClickFunction, menuIsOpened }: MenuButtonTypes) => {
  return (
    <MenuButtonContainer
      variants={mobileHeaderVariants}
      initial="hidden"
      animate="visible"
      onClick={handleClickFunction}
      whileTap={{ scale: 1.1 }}
    >
      <Image
        src={
          menuIsOpened ? "/images/close-button.svg" : "/images/menu-button.svg"
        }
        alt="menu button"
        fill={true}
        className="menuButton"
      />
    </MenuButtonContainer>
  );
};

export default MenuButton;
