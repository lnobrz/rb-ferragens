import styled from "styled-components";
import { motion } from "framer-motion";

export const MobileMenuContainer = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0 20px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #1b1b18 0%,
    #0a0800 100%
  ) !important;
  position: absolute;
  top: 60px;
  right: 20px;
  z-index: 100;
`;

export const MenuItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;

  .mobileMenuLink {
    text-decoration: none;
  }
`;
