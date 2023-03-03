import styled from "styled-components";

export const CoverContainer = styled.section`
  background: url("/images/cover.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100% !important;
  background-attachment: fixed;

  .coverButton {
    margin: 24px 0 68px 0;
  }
`;

export const ParagraphContainer = styled.div`
  max-width: 70%;
  margin: 0px 75px 60px 75px;
  display: flex;
  flex-flow: column nowrap;
`;
