import styled from "styled-components";
import { motion } from "framer-motion";
import { kanit } from "@/public/fonts";

export const TextButtonContainer = styled(motion.div)`
  .textButton {
    font-family: ${kanit.style.fontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 6px;
    text-decoration-line: underline;
    color: #ffdd00;
    text-transform: uppercase;
  }
`;
