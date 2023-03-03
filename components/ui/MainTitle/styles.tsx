import styled from "styled-components";
import { tomorrow } from "@/public/fonts";

export const Title = styled.h1`
  font-family: ${tomorrow.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-size: 2em;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  text-transform: uppercase;
  color: #f9f3d7;
`;

export const TitleContainer = styled.div`
  max-width: 70%;
  background: transparent !important;
  margin: 50px 20px 70px 20px;
`;

export const HighlightedText = styled.bdi`
  color: #ffdd00;
`;
