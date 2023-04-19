import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: transparent;
  padding: 25px 0;

  @media (min-width: 1000px) {
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  width: 80px;
  height: 80px;

  .logo {
    max-width: 80px;
    max-height: 80px;
    margin-left: 20px;
    position: static;
    margin: 25px 0;
  }

  @media (min-width: 600px) {
    .logo {
      margin: 25px 40px;
    }
  }

  @media (min-width: 800px) {
    .logo {
      margin: 25px 60px;
    }
  }

  @media (min-width: 900px) {
    .logo {
      margin: 25px 80px;
    }
  }

  @media (min-width: 1000px) {
    .logo {
      margin: 25px 80px;
    }
  }

  @media (min-width: 1200px) {
    .logo {
      margin: 25px 200px;
    }
  }

  @media (min-width: 1350px) {
    .logo {
      margin: 25px 300px;
    }
  }
`;
