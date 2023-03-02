import styled from "styled-components";

export const MobileMenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0 20px;
  background: rgba(27, 26, 24, 0.9);
  border-radius: 5px;
  position: absolute;
  top: 60px;
  right: 20px;
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
