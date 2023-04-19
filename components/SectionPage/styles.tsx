import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionContainer = styled.div`
  margin-top: 20px;

  @media (min-width: 600px) {
    margin-top: 30px;
  }

  @media (min-width: 800px) {
    margin-top: 40px;
  }
`;

export const CardsContainer = styled(motion.div)`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  margin: 50px 0 100px 0;
  gap: 30px;
`;
