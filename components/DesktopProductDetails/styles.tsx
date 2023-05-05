import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  .productDetailsSecondaryTitle {
    margin: 0;
  }

  .productDetailsImage {
    width: 100%;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 500px) {
    flex-flow: row nowrap;
    gap: 20px;
  }

  .detailsButton {
    @media (min-width: 1000px) {
      width: 50%;
    }
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: start;
`;

export const MainProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-bottom: 50px;
`;

export const MainInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
