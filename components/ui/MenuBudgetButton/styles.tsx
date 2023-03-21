import styled from "styled-components";
import { kanit } from "@/public/fonts";
import { motion } from "framer-motion";

export const ButtonContainer = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 35px;
  background: #ffdd00;
  border-radius: 5px;
  padding: 5px 25px;
  margin-bottom: 20px;
  border: none;
  font-family: ${kanit.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #1b1a18;

  @media (min-width: 1000px) {
    width: auto;
    margin-bottom: 0;
  }

  @media (min-width: 1500px) {
    margin-top: 20px;
  }
`;
