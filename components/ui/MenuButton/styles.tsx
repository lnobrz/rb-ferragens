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
`;
