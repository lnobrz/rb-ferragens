import { MenuItem } from "./styles";

type MenuItemTypes = {
  itemName: string;
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

const MobileMenuItem = ({ itemName }: MenuItemTypes) => {
  return (
    <MenuItem layout variants={mobileMenuItemVariants}>
      {itemName}
    </MenuItem>
  );
};

export default MobileMenuItem;
