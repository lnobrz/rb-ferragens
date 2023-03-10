import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuButtonContainer = styled(motion.button)`
  border: none;
  background: transparent;

  .menuButton {
    max-width: 24px;
    max-height: 16px;
    position: static !important;
    margin: 30px 20px;
  }

  @media (min-width: 600px) {
    .menuButton {
      margin: 20px 40px;
    }
  }

  @media (min-width: 800px) {
    .menuButton {
      margin: 30px 60px;
    }
  }

  @media (min-width: 900px) {
    .menuButton {
      margin: 40px 80px;
    }
  }

  @media (min-width: 1200px) {
    .menuButton {
      margin: 50px 100px;
    }
  }

  @media (min-width: 1350px) {
    .menuButton {
      margin: 60px 120px;
    }
  }
`;
