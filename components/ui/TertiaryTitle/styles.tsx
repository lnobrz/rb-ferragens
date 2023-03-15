import styled from "styled-components";
import { kanit } from "@/public/fonts";
import { motion } from "framer-motion";

export const TitleDiv = styled(motion.div)`
  justify-items: center;
  align-items: center;
  margin: 0px 0px 20px 0px;
`;

export const TertiaryTitleContainer = styled(motion.h4)`
  font-family: ${kanit.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-transform: uppercase;
  color: #f9f3d7;
  display: flex;
`;
