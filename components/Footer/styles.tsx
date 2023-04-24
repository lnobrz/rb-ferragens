import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-top: 1px solid #efdf64;
`;

export const FooterLogoContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 20px 0 30px 0;

  .footerLogo {
    max-width: 100px;
    max-height: 100px;
    position: static !important;
  }
`;

export const Teste = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  width: 100%;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
