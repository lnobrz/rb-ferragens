import { MenuItem } from "./styles";

type MenuItemTypes = {
  itemName: string;
};

const MobileMenuItem = ({ itemName }: MenuItemTypes) => {
  return <MenuItem>{itemName}</MenuItem>;
};

export default MobileMenuItem;
