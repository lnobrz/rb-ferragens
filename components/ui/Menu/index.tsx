import { MenuContainer, MenuItemsContainer } from "./styles";
import MenuItem from "../MenuItem";
import { MenuLinks } from "@/storage/data";
import Link from "next/link";
import useDeviceInfo from "@/hooks/useDeviceInfo";
import MenuBudgetButton from "../MenuBudgetButton";
import { useCallback, useEffect, useRef } from "react";

type MenuTypes = {
  disableAnimations?: boolean;
  menuHandlerFunction?: () => void;
};

const mobileMenuVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0,
      mass: 0.4,
      stiffness: 70,
      duration: 0.6,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const Menu = ({
  disableAnimations = false,
  menuHandlerFunction,
}: MenuTypes) => {
  const device = useDeviceInfo();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOutsideMenuClick = useCallback(
    (event: Event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuHandlerFunction
      ) {
        menuHandlerFunction();
      }
    },
    [menuHandlerFunction]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideMenuClick);

    return document.removeEventListener("mousedown", handleOutsideMenuClick);
  }, [handleOutsideMenuClick]);

  return (
    <div ref={menuRef}>
      <MenuContainer
        variants={disableAnimations ? undefined : mobileMenuVariants}
        initial={disableAnimations ? undefined : "hidden"}
        animate={disableAnimations ? undefined : "visible"}
        exit={disableAnimations ? undefined : { scale: 0 }}
      >
        <MenuItemsContainer>
          {MenuLinks.map((menuLink) => {
            return (
              <Link
                key={menuLink.id}
                href={menuLink.url}
                className="mobileMenuLink"
              >
                <MenuItem
                  itemName={menuLink.name}
                  disableAnimations={disableAnimations}
                />
              </Link>
            );
          })}
        </MenuItemsContainer>
        {device === "mobile" && <MenuBudgetButton />}
      </MenuContainer>
    </div>
  );
};

export default Menu;
