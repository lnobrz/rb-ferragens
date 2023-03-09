import styled from "styled-components";
import { motion } from "framer-motion";

export const CoverContainer = styled.section`
  background: url("/images/cover.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .coverButton {
    margin: 24px 0 68px 0;
  }
`;

export const ParagraphContainer = styled(motion.div)`
  max-width: 70%;
  margin: 0px 75px 60px 75px;
  display: flex;
  flex-flow: column nowrap;
`;
