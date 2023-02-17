import styled from "styled-components";

export const CoverContainer = styled.section`
  background: url("/images/cover.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100% !important;
  background-attachment: fixed;

  .highlitedText {
    color: #cdaf18;
    margin-left: 10px;
  }
`;

export const ParagraphContainer = styled.div`
  max-width: 60%;
  margin: 0px 75px 60px 75px;
  display: flex;
  flex-flow: column nowrap;
`;
