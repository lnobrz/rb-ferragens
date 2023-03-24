import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.li)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 280px;
  height: 400px;
  background: #24231e;
  box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.14);
  border-radius: 5px;

  .optionCardTitle {
    margin: 15px 0 0 15px !important;
    font-size: 24px;
  }

  .optionCardParagraph {
    margin: 10px 15px 15px 15px;
    font-size: 16px;
    line-height: 22px;
    color: #c3bea7;
    height: 100px;
    overflow: hidden;
  }

  .optionCardButton {
    margin: 0 0 15px 15px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
`;
