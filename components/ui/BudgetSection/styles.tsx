import styled from "styled-components";

export const BudgetSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 0;
  margin-left: 20px;

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
  }
`;
