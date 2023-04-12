import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-width: 5px 5px 0px 0px;
  border-style: solid;
  border-color: #efdf64;

  @media (min-width: 400px){
    height: 400px;
  }

  @media (min-width: 500px){
    height: 500px;
  }

  @media (min-width: 1000px){
    width: 50%;
  }
`;
