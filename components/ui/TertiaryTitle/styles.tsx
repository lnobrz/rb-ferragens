import styled from "styled-components";
import { kanit } from "@/public/fonts";
import { motion } from "framer-motion";

export const TitleDiv = styled(motion.span)`
  display: flex;
  justify-items: center;
  align-items: center;
`;

export const TertiaryTitleContainer = styled(motion.h2)`
  font-family: ${kanit.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  color: #f9f3d7;
`;
