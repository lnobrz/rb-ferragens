import styled from "styled-components";
import { tomorrow, kanit } from "@/public/fonts";

export const NumDataContainer = styled.li`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  &:last-child {
    margin-right: 0;
  }
`;

export const NumContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const DataNum = styled.div`
  font-family: ${tomorrow.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  color: #f9f3d7;
`;

export const HighlightedCaracter = styled.bdi`
  color: #ffdd00;
`;

export const DataName = styled.h6`
  font-family: ${kanit.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #e5dfc3;
  margin-top: 10px;
`;
