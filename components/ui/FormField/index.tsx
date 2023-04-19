import {
  FieldContainer,
  InputContainer,
  TextareaContainer,
  InputLabel,
} from "./styles";

type FormFieldTypes = {
  inputName: string;
  inputType: "email" | "text" | "tel" | "textarea";
};

const FormField = ({ inputName, inputType }: FormFieldTypes) => {
  return (
    <FieldContainer>
      <InputLabel htmlFor={inputName}>{inputName}</InputLabel>
      {inputType === "textarea" ? (
        <TextareaContainer
          id={inputName}
          name={inputName}
          rows={10}
        ></TextareaContainer>
      ) : (
        <InputContainer
          type={inputType}
          id={inputName}
          name={inputName}
        ></InputContainer>
      )}
    </FieldContainer>
  );
};

export default FormField;
