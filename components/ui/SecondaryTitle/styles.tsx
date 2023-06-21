import styled from "styled-components";
import { tomorrow } from "@/public/fonts";
import { motion } from "framer-motion";

export const TitleContainer = styled(motion.h1)`
  font-family: ${tomorrow.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 40px;
  text-transform: uppercase;
  color: #f9f3d7;
  display: flex;
  margin: 0;
`;
