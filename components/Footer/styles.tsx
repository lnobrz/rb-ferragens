import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-top: 1px solid #cdaf18;
  margin: 0 20px;

  @media (min-width: 600px) {
    margin: 0 40px;
  }

  @media (min-width: 800px) {
    margin: 0 60px;
  }

  @media (min-width: 900px) {
    margin: 0 80px;
  }

  @media (min-width: 1200px) {
    margin: 0 100px;
  }

  @media (min-width: 1350px) {
    margin: 0 120px;
  }
`;

export const FooterLogoContainer = styled.div`
  width: 140px;
  height: 70px;
  margin: 20px 0 30px 0;

  .footerLogo {
    max-width: 140px;
    max-height: 70px;
    position: static !important;
  }
`;
