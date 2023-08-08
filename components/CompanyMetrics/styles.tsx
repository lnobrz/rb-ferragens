import styled from "styled-components";
import { motion } from "framer-motion";

export const MetricsContainer = styled(motion.ul)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin: 0 20px;

  @media (max-width: 450px) {
    flex-flow: column nowrap;
    justify-content: center;
    margin: 0;
  }
`;
