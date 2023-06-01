import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 25px 0;
`;

export const LogoContainer = styled.div`
  width: 80px;
  height: 80px;

  .logo {
    max-width: 80px;
    max-height: 80px;
    position: static;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
