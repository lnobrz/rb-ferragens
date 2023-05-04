import styled from "styled-components";

export const AboutSectionContainer = styled.section`
  .aboutPageTitle {
    margin-top: 40px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  p {
    margin-bottom: 0px;

    &:first-child {
      margin-top: 50px;
    }
  }

  .aboutMetrics {
    margin: 50px 0 25px 0;
  }

  .contentButton {
    margin-bottom: 25px;
    width: 50%;
  }
`;

export const MetricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
