import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionContainer = styled.section`
  margin-top: 20px;

  @media (min-width: 600px) {
    margin-top: 30px;
  }

  @media (min-width: 800px) {
    margin-top: 40px;
  }

  .sectionTitle {
    margin: 0 0 50px 20px !important;

    @media (min-width: 600px) {
      margin: 0 0 80px 40px !important;
    }

    @media (min-width: 800px) {
      margin: 0 0 80px 60px !important;
    }

    @media (min-width: 900px) {
      margin: 0 0 80px 80px !important;
    }

    @media (min-width: 1200px) {
      margin: 0 0 80px 100px !important;
    }

    @media (min-width: 1350px) {
      margin: 0 0 80px 120px !important;
    }
  }
`;

export const CardsContainer = styled(motion.div)`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  margin: 50px 20px 100px 20px;
  gap: 30px;

  @media (min-width: 600px) {
    margin: 50px 40px 100px 40px !important;
  }

  @media (min-width: 800px) {
    margin: 50px 60px 100px 60px !important;
  }

  @media (min-width: 900px) {
    margin: 50px 80px 100px 80px !important;
  }

  @media (min-width: 1200px) {
    margin: 50px 100px 100px 100px !important;
  }

  @media (min-width: 1350px) {
    margin: 50px 120px 100px 120px !important;
  }
`;
