import styled from "styled-components";
import { motion } from "framer-motion";

export const LayoutContainer = styled(motion.div)`
  margin: 0 20px;

  @media (min-width: 600px) {
    margin: 0 40px;
  }

  @media (min-width: 800px) {
    margin: 0 60px;
  }

  @media (min-width: 900px) {
    margin: 0 80px;
  }

  @media (min-width: 1000px) {
    margin: 0 80px;
  }

  @media (min-width: 1200px) {
    margin: 0 200px;
  }

  @media (min-width: 1350px) {
    margin: 0 300px;
  }
`;
