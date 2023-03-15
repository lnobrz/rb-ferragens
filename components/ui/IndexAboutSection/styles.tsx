import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutSectionContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;

  .aboutButton {
    margin: 0px 0px 28px 20px;

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
  }
`;
