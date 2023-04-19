import styled from "styled-components";

export const ContactSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15%;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  .contactSectionParagraph {
    text-align: center;
  }
`;

export const Teste = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .contactButton {
    width: 100%;

    @media (min-width: 1000px) {
      margin-top: 20px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin: 25px 0 100px 0;
  width: 100%;

  @media (min-width: 1000px) {
    width: 60%;
  }
`;
