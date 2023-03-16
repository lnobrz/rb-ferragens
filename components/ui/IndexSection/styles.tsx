import styled from "styled-components";
import { motion } from "framer-motion";

export const IndexSectionContainer = styled(motion.section)`
  display: flex;
  flex-flow: column wrap;
  margin: 0 20px;
  margin-top: 68px;

  @media (min-width: 600px) {
    margin: 20px 40px;
  }

  @media (min-width: 800px) {
    margin: 40px 60px;
  }

  @media (min-width: 900px) {
    margin: 60px 80px;
  }

  @media (min-width: 1200px) {
    margin: 80px 100px;
  }

  @media (min-width: 1350px) {
    margin: 100px 120px;
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

  .aboutSectionHeader {
    flex-flow: column nowrap !important;
  }

  .advantagesMain {
    flex-direction: row-reverse;
  }
`;

export const SectionHeader = styled(motion.div)`
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

    @media (min-width: 700px) {
      text-align: left;
    }

    @media (min-width: 1000px) {
      max-width: 80%;
    }

    @media (min-width: 1200px) {
      max-width: 60%;
    }

    @media (min-width: 1200px) {
      max-width: 50%;
    }

    @media (min-width: 1600px) {
      max-width: 40%;
    }
  }
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled(motion.main)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .sectionIllustration {
    display: none;

    @media (min-width: 1000px) {
      display: flex;
    }
  }
`;
