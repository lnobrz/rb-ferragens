import styled from "styled-components";
import { kanit } from "@/public/fonts";
import { motion } from "framer-motion";

export const LinkContainer = styled(motion.a)`
  display: flex;
  justify-items: center;
  align-items: center;
  text-decoration: none;
`;

export const LinkTitle = styled(motion.h2)`
  font-family: ${kanit.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  color: #f9f3d7;
`;
