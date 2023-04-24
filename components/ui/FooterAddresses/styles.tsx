import styled from "styled-components";

export const AddressesContainer = styled.address`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 1000px) {
    align-items: flex-start;
  }

  .footerAddress {
    margin: 0;
    font-size: 16px;
  }
`;
