import styled from "styled-components";
import { workSans } from "@/public/fonts";

export const ButtonContainer = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;

  .buttonArrow {
    max-width: 25px;
    max-height: 18px;
    position: static !important;
  }
`;

export const ButtonTitle = styled.h6`
  font-family: ${workSans.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  line-height: 25px;
  color: #eceadf;
`;
