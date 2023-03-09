import styled from "styled-components";
import { motion } from "framer-motion";

export const IndexSectionContainer = styled(motion.section)`
  display: flex;
  flex-flow: column wrap;
  margin: 0 20px;
  margin-top: 68px;

  .advertisement {
    color: #c2bb99;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
  }
`;
