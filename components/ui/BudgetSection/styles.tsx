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

  .justifyEnd {
    justify-content: flex-end;
    width: 100%;
  }
`;
