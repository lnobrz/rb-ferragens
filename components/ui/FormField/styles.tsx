import styled from "styled-components";
import { kanit } from "@/public/fonts";

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 25px;
`;

export const InputContainer = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #efdf64;
`;

export const TextareaContainer = styled.textarea`
  background: transparent;
  border: none;
  border-bottom: 1px solid #efdf64;
`;

export const InputLabel = styled.label`
  font-family: ${kanit.style.fontFamily}, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #8f8f8c;
`;
