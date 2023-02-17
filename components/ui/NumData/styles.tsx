import styled from "styled-components";
import { workSans } from "@/public/fonts";

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
  font-family: ${workSans.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  color: #f3f2e7;
`;

export const HighlightedCaracter = styled.bdi`
  color: #cdaf18;
`;

export const DataName = styled.h6`
  font-family: ${workSans.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #f3f2e7;
  margin-top: 10px;
`;
