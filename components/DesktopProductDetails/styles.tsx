import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 20px 100px 20px;

  .productDetailsSecondaryTitle {
    margin: 0;
  }

  .productDetailsImage {
    width: 100%;
  }

  @media (min-width: 600px) {
      margin: 0 40px 100px 40px;
  }

  @media (min-width: 800px) {
      margin: 0 60px 100px 60px;
  }

  @media (min-width: 900px) {
      margin: 0 80px 100px 80px;
  }

  @media (min-width: 1200px) {
      margin: 0 200px 100px 200px;
  }

  @media (min-width: 1350px) {
      margin: 0 300px 100px 300px;
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
    @media (min-width: 1000px){
      width: 50%;
    }
    
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: start;
`;

export const Teste = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin-bottom: 50px;
`;

export const Teste2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Teste3 = styled.div`
    display: flex;
    flex-direction: column;
`;