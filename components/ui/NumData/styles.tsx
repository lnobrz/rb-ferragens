import styled from "styled-components";
import { tomorrow, kanit } from "@/public/fonts";
import { motion } from "framer-motion";

export const NumDataContainer = styled(motion.li)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 450px) {
    margin: 0;
  }
`;

export const NumContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
`;

export const DataNum = styled(motion.div)`
  font-family: ${tomorrow.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.75em;
  line-height: 28px;
  text-transform: uppercase;
  color: #f9f3d7;

  @media (min-width: 600px) {
    font-size: 2em;
  }

  @media (min-width: 800px) {
    font-size: 2.25em;
  }
`;

export const HighlightedCaracter = styled.bdi`
  font-family: ${tomorrow.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  line-height: 37px;
  text-transform: uppercase;
  color: #efdf64;

  @media (min-width: 600px) {
    font-size: 2.25em;
  }

  @media (min-width: 800px) {
    font-size: 2.5em;
  }
`;

export const DataName = styled.p`
  font-family: ${kanit.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75em;
  line-height: 20px;
  color: #e5dfc3;
  margin-top: 10px;

  @media (min-width: 600px) {
    font-size: 1em;
  }

  @media (min-width: 800px) {
    font-size: 1.25em;
  }
`;
