import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutSectionContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;

  .aboutSection {
    flex-flow: row nowrap;
  }
`;
