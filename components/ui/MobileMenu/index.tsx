import { MobileMenuContainer, MenuItemsContainer } from "./styles";
import MobileMenuItem from "../MobileMenuItem";
import { MenuLinks } from "@/storage/data";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <MobileMenuContainer>
      <MenuItemsContainer>
        {MenuLinks.map((menuLink) => {
          return (
            <Link
              key={menuLink.id}
              href={menuLink.url}
              className="mobileMenuLink"
            >
              <MobileMenuItem itemName={menuLink.name} />
            </Link>
          );
        })}
      </MenuItemsContainer>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
