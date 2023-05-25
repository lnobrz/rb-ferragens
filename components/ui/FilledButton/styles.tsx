import styled from "styled-components";
import { kanit } from "@/public/fonts";
import { motion } from "framer-motion";

export const ButtonContainer = styled(motion.a)<{
  background: "yellow" | "transparent";
  size: "small" | "large";
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.size === "small" ? "90%" : "100%")};
  height: ${(props) => (props.size === "small" ? "35px" : "50px")};
  background: ${(props) =>
    props.background === "yellow" ? "#EFDF64" : "transparent"};
  border-radius: 5px;
  padding: 5px 25px;
  margin-bottom: 20px;
  border: ${(props) =>
    props.background === "yellow" ? "none" : "1px solid #EFDF64"};
  font-family: ${kanit.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.size === "small" ? "12px" : "18px")};
  line-height: 16px;
  text-align: center;
  color: ${(props) => (props.background === "yellow" ? "#1b1a18" : "#f9f3d7")};
  text-decoration: none;

  @media (min-width: 1000px) {
    width: auto;
    margin-bottom: 0;
  }
`;
