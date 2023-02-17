import styled from "styled-components";
import { forum } from "@/public/fonts";

export const Title = styled.h1`
  font-family: ${forum.style.fontFamily}, "Times New Roman", Times, Serif;
  font-size: 2em;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  text-transform: uppercase;
  color: #f3f2e7;
`;

export const TitleContainer = styled.div`
  max-width: 70%;
  background: transparent !important;
  margin: 50px 20px 70px 20px;
`;
