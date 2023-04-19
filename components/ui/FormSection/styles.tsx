import styled from "styled-components";
import { kanit } from "@/public/fonts";
import { motion } from "framer-motion";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  width: 100%;
`;

export const SubmitButton = styled(motion.input)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #efdf64;
  border-radius: 5px;
  padding: 5px 25px;
  margin-bottom: 20px;
  font-family: ${kanit.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
  text-align: center;
  color: #1b1a18;
  margin-top: 50px;
`;
