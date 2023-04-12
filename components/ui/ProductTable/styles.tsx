import styled from "styled-components";
import { kanit } from "@/public/fonts";

export const TableContainer = styled.table`
  width: 100%;
  color: #e5dfc3;
  font-family: ${kanit.style.fontFamily};
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  border: 1px solid #efdf64;
  margin-top: 50px;

  thead,
  tbody,
  tr,
  th,
  td {
    border: 1px solid #efdf64;
    padding: 10px;
  }
`;
