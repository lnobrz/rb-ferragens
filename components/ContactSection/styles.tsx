import styled from "styled-components";

export const ContactSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15%;

  margin-top: 20px;

  @media (min-width: 600px) {
    margin-top: 30px;
  }

  @media (min-width: 800px) {
    margin-top: 40px;
  }

  @media (min-width: 1000px) {
    margin-bottom: 100px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 25%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 25px 0 100px 0;

  @media (min-width: 1000px) {
    align-items: center;
    width: 60%;
  }

  .contactButton {
    width: 100%;

    @media (min-width: 1000px) {
      margin-top: 20px;
    }
  }

  .contactSectionParagraph {
    margin-bottom: 50px;

    @media (min-width: 1000px) {
      margin-bottom: 0;
    }
  }
`;
