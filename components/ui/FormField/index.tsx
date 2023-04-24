import {
  FieldContainer,
  InputContainer,
  TextareaContainer,
  InputLabel,
} from "./styles";
import { Dispatch, SetStateAction, useRef } from "react";

type FormFieldTypes = {
  inputName: string;
  inputType: "email" | "text" | "tel" | "textarea";
  textSetter: Dispatch<SetStateAction<string>>;
};

const FormField = ({ inputName, inputType, textSetter }: FormFieldTypes) => {
  return (
    <FieldContainer>
      <InputLabel htmlFor={inputName}>{inputName}</InputLabel>
      {inputType === "textarea" ? (
        <TextareaContainer
          required={true}
          id={inputName}
          name={inputName}
          rows={10}
          onChange={(event) => textSetter(event.target.value)}
        ></TextareaContainer>
      ) : (
        <InputContainer
          required={true}
          type={inputType}
          id={inputName}
          name={inputName}
          onChange={(event) => textSetter(event.target.value)}
        ></InputContainer>
      )}
    </FieldContainer>
  );
};

export default FormField;
