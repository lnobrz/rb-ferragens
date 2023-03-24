import styled from "styled-components";
import { motion } from "framer-motion";

export const CoverContainer = styled.section<{
  device: "desktop" | "mobile" | undefined;
}>`
  background: url(${(props) =>
    props.device === "desktop" || props.device === undefined
      ? "/images/cover.png"
      : "/images/cover-mobile.png"});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .coverButton {
    margin: 10px 0 68px 0;
  }
`;

export const ParagraphContainer = styled(motion.div)`
  max-width: 80%;
  margin: 0 40px 60px 40px;
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 400px) {
    max-width: 70%;
    margin: 0 80px 60px 80px;
  }

  @media (min-width: 500px) {
    max-width: 55%;
    margin: 0 0 60px 80px;
  }

  @media (min-width: 600px) {
    max-width: 45%;
    margin: 0 0 60px 120px;
  }

  @media (min-width: 800px) {
    max-width: 40%;
    margin: 0 0 60px 140px;
  }

  @media (min-width: 900px) {
    margin: 0 0 60px 160px;
  }

  @media (min-width: 900px) {
    margin: 0 0 60px 160px;
  }

  @media (min-width: 1200px) {
    margin: 0 0 60px 180px;
  }

  @media (min-width: 1350px) {
    margin: 0 0 60px 200px;
  }

  @media (min-width: 1500px) {
    max-width: 25%;
  }
`;
