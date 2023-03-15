import styled from "styled-components";

export const BudgetSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0;
  margin: 68px 0 0 20px;

  &:before {
    content: url("/images/horizontal-decoration.svg");
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 40px;
    justify-content: flex-end;
  }

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

  .justifyEnd {
    justify-content: flex-end;
    width: 100%;
  }
`;
