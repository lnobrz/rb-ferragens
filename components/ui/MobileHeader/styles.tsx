import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: transparent;

  @media (min-width: 1000px) {
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  width: 50px;
  height: 29px;

  .logo {
    max-width: 50px;
    max-height: 40px;
    margin: 20px;
    position: static;
  }

  @media (min-width: 600px) {
    .logo {
      margin: 20px 40px;
    }
  }

  @media (min-width: 800px) {
    .logo {
      margin: 30px 60px;
    }
  }

  @media (min-width: 900px) {
    .logo {
      margin: 40px 80px;
    }
  }

  @media (min-width: 1200px) {
    .logo {
      margin: 50px 100px;
    }
  }

  @media (min-width: 1350px) {
    .logo {
      margin: 60px 120px;
    }
  }
`;
