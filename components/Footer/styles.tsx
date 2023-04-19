import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-top: 1px solid #efdf64;
`;

export const FooterLogoContainer = styled.div`
  width: 160px;
  height: 160px;
  margin: 20px 0 30px 0;

  .footerLogo {
    max-width: 160px;
    max-height: 160px;
    position: static !important;
  }
`;
