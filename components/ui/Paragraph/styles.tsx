import styled from "styled-components";
import { kanit } from "@/public/fonts";
import { motion } from "framer-motion";

export const MotionParagraphContainer = styled(motion.p)`
  font-family: ${kanit.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 20px;
  color: #e5dfc3;

  @media (min-width: 500px) {
    font-size: 1.1em;
    line-height: 25px;
  }

  @media (min-width: 700px) {
    font-size: 1.3em;
  }

  @media (min-width: 1800px) {
    font-size: 1.5em;
  }
`;

export const ParagraphContainer = styled.p`
  font-family: ${kanit.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 20px;
  color: #e5dfc3;

  @media (min-width: 500px) {
    font-size: 1.1em;
    line-height: 25px;
  }

  @media (min-width: 700px) {
    font-size: 1.3em;
  }

  @media (min-width: 1800px) {
    font-size: 1.5em;
  }
`;
