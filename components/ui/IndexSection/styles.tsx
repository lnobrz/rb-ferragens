import styled from "styled-components";
import { motion } from "framer-motion";

export const IndexSectionContainer = styled(motion.section)`
  display: flex;
  flex-flow: column wrap;
  margin: 0 20px;
  margin-top: 68px;

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

  .advertisement {
    color: #c2bb99;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    max-width: 100%;
    text-align: end;
  }

  .productsHeader {
    @media (min-width: 700px) {
      flex-direction: row-reverse;
    }
  }

  .aboutSection {
    flex-direction: column;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .aboutSectionParagraph {
    @media (min-width: 400px) {
      max-width: 70%;
    }

    @media (min-width: 500px) {
      max-width: 70%;
    }

    @media (min-width: 700px) {
      max-width: 40%;
      text-align: left;
    }

    @media (min-width: 1000px) {
      max-width: 30%;
    }
  }
`;
