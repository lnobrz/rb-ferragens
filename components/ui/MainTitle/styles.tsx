import styled from "styled-components";
import { tomorrow } from "@/public/fonts";
import { motion } from "framer-motion";

export const Title = styled.h1`
  font-family: ${tomorrow.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-size: 2em;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  text-transform: uppercase;
  color: #f9f3d7;

  @media (min-width: 500px) {
    font-size: 2.2em;
  }

  @media (min-width: 700px) {
    font-size: 2.5em;
    line-height: 45px;
  }

  @media (min-width: 1800px) {
    font-size: 2.8em;
    line-height: 50px;
  }

  @media (min-width: 2400px) {
    font-size: 3em;
    line-height: 60px;
  }

  @media (min-width: 3000px) {
    font-size: 5em;
    line-height: 100px;
  }
`;

export const TitleContainer = styled(motion.div)`
  max-width: 100%;
  background: transparent !important;
  margin: 50px 0 70px 0;

  @media (min-width: 400px) {
    max-width: 70%;
  }

  @media (min-width: 700px) {
    max-width: 60%;
  }

  @media (min-width: 1800px) {
    max-width: 30%;
  }

  @media (min-width: 2400px) {
    max-width: 25%;
  }

  @media (min-width: 3000px) {
    max-width: 20%;
  }
`;

export const HighlightedText = styled(motion.bdi)``;
