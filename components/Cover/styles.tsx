import styled from "styled-components";
import { motion } from "framer-motion";

export const CoverContainer = styled.section<{ device: "mobile" | "desktop" }>`
  background: ${(props) =>
    props.device === "mobile"
      ? "url('/images/cover-mobile.webp')"
      : "url('/images/cover.webp')"};
  background-size: cover;

  .coverButton {
    margin: 10px 0 68px 0;
  }
`;

export const ParagraphContainer = styled(motion.div)`
  max-width: 80%;
  margin: 0 0 60px 30px;
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 400px) {
    max-width: 70%;
    margin: 0 40px 60px 40px;
  }

  @media (min-width: 500px) {
    max-width: 55%;
  }

  @media (min-width: 600px) {
    max-width: 45%;
    margin: 0 0 60px 50px;
  }

  @media (min-width: 800px) {
    max-width: 40%;
  }

  @media (min-width: 900px) {
    margin: 0 0 60px 60px;
  }

  @media (min-width: 900px) {
    margin: 0 0 60px 60px;
  }

  @media (min-width: 1200px) {
    margin: 0 0 60px 70px;
  }

  @media (min-width: 1350px) {
    margin: 0 0 60px 100px;
  }

  @media (min-width: 1500px) {
    max-width: 25%;
  }
`;
