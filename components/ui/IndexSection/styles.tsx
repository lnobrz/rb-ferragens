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
    max-width: 100%;
    text-align: end;
  }

  .productsHeader {
    @media (min-width: 700px) {
      flex-direction: row-reverse;
    }
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
