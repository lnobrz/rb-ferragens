import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuContainer = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: fit-content;
  padding: 0 20px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #1b1b18 0%,
    #0a0800 100%
  ) !important;
  position: absolute;
  top: 80px;
  right: 20px;
  z-index: 100;

  @media (min-width: 600px) {
    right: 30px;
  }

  @media (min-width: 800px) {
    top: 90px;
    right: 60px;
  }

  @media (min-width: 900px) {
    right: 80px;
  }

  @media (min-width: 1000px) {
    justify-content: center;
    position: static;
    background: transparent !important;
    flex-direction: row;
    padding: 0;
  }

  @media (min-width: 1200px) {
    top: 90px;
    right: 110px;
  }

  @media (min-width: 1350px) {
    top: 100px;
    right: 120px;
  }

  .menuButton {
    width: 70%;
  }
`;

export const MenuItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 40px;

  @media (min-width: 1000px) {
    flex-direction: row;
    padding: 0;
    margin: 0;
  }

  .mobileMenuLink {
    text-decoration: none;

    @media (min-width: 1000px) {
      padding-right: 50px;

      &:last-child {
        padding-right: 0;
      }
    }
  }
`;
