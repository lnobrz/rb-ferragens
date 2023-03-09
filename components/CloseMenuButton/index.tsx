import { MenuButtonContainer } from "../ui/MenuButton/styles";
import Image from "next/image";

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

type MenuButtonTypes = {
  handleClickFunction(): void;
};

const CloseMenuButton = ({ handleClickFunction }: MenuButtonTypes) => {
  return (
    <MenuButtonContainer
      variants={mobileHeaderVariants}
      initial="hidden"
      animate="visible"
      onClick={handleClickFunction}
      whileTap={{ scale: 1.3 }}
    >
      <Image
        src="/images/close-button.svg"
        alt="menu button"
        fill={true}
        className="menuButton"
      />
    </MenuButtonContainer>
  );
};

export default CloseMenuButton;
