import { MenuItemContainer } from "./styles";

type MenuItemTypes = {
  itemName: string;
  disableAnimations?: boolean;
};

const mobileMenuItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.7 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const MenuItem = ({ itemName, disableAnimations = false }: MenuItemTypes) => {
  return (
    <MenuItemContainer
      variants={disableAnimations ? undefined : mobileMenuItemVariants}
      whileTap={{ scale: 1.2 }}
      whileHover={{ scale: 1.1, color: "#EFDF64" }}
    >
      {itemName}
    </MenuItemContainer>
  );
};

export default MenuItem;
