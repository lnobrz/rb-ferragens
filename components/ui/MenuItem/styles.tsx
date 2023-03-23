import styled from "styled-components";
import { kanit } from "@/public/fonts";
import { motion } from "framer-motion";

export const MenuItemContainer = styled(motion.li)`
  font-family: ${kanit.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #f9f3d7;
  margin-bottom: 20px;

  @media (min-width: 1000px) {
    margin-right: 20px;

    &:lastchild {
      margin-right: 0;
    }
  }
`;