import styled from "styled-components";
import { motion } from "framer-motion";
import { kanit } from "@/public/fonts";

export const TextButtonContainer = styled(motion.a)`
  font-family: ${kanit.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 6px;
  text-decoration-line: underline;
  color: #efdf64;
  text-transform: uppercase;
  text-decoration: none;
  &:visited {
    color: #efdf64;
  }
`;
