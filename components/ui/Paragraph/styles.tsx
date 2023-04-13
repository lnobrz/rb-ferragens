import styled from "styled-components";
import { kanit } from "@/public/fonts";
import { motion } from "framer-motion";

export const ParagraphContainer = styled(motion.p) <{ textHierarchy: "main" | "secondary" }>`
  font-family: ${kanit.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.textHierarchy === "main" ? "#e5dfc3" : "#DCD8B6"}; 

  @media (min-width: 500px) {
    line-height: 25px;
  }

  @media (min-width: 700px) {
    font-size: 20px;
  }
`;
