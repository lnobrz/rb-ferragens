import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuButtonContainer = styled(motion.button)`
  border: none;
  background: transparent;

  .menuButton {
    max-width: 24px;
    max-height: 16px;
    position: static !important;
    margin: 0 15px 0 0;
  }

  @media (min-width: 600px) {
    .menuButton {
      margin: 0 25px 0 0;
    }
  }

  @media (min-width: 800px) {
    .menuButton {
      margin: 0 55px 0 0;
    }
  }

  @media (min-width: 900px) {
    .menuButton {
      margin: 0 75px 0 0;
    }
  }

  @media (min-width: 1200px) {
    .menuButton {
      margin: 0 100px 0 0;
    }
  }

  @media (min-width: 1350px) {
    .menuButton {
      margin: 0 120px 0 0;
    }
  }
`;
