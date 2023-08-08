import styled from "styled-components";
import { kanit } from "@/public/fonts";
import { motion } from "framer-motion";

export const ButtonContainer = styled(motion.a)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  max-width: fit-content;
  text-decoration: none;

  .smallText {
    font-size: 16px;
    margin: 0;
  }

  .mediumText {
    font-size: 24px;
  }

  .largeText {
    font-size: 36px;
    text-transform: uppercase;
    margin: 35px 0;
    width: 100%;
    text-align: right;
    margin-right: 20px;
  }
`;

export const ButtonTitle = styled.p<{ arrowDirection: "left" | "right" }>`
  font-family: ${kanit.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  line-height: 35px;
  color: #efdf64;
  width: auto !important;
  margin: 0;
  position: relative;

  &::before {
    width: 25px;
    height: 18px;
    position: absolute;
    top: 25%;
    left: -50px;
    content: "";
    background-image: ${(props) =>
      props.arrowDirection === "left" && "url('images/left-arrow.svg')"};
    background-size: 25px 18px;
    @media (max-width: 392px) {
      display: none;
    }
  }

  &::after {
    width: 25px;
    height: 18px;
    position: absolute;
    top: 25%;
    right: -50px;
    content: "";
    background-image: ${(props) =>
      props.arrowDirection === "right" && "url('images/right-arrow.svg')"};
    @media (max-width: 392px) {
      display: none;
    }
  }
`;
