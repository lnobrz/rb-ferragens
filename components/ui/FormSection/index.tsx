import FormField from "../FormField";
import { FormContainer, SubmitButton } from "./styles";
import { Dispatch, SetStateAction } from "react";

const inputTypes = ["email", "text", "tel", "textarea"] as const;

type FormSectionTypes = {
  fieldName: string[];
  fieldType: (typeof inputTypes)[number][];
  submitButtonText: string;
  fieldValue: string[];
  fieldSetter: Dispatch<SetStateAction<string>>[];
  submitAction: (clientName: string, text: string) => void;
};

const SubmitButtonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.7 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const FormSection = ({
  fieldName,
  fieldType,
  submitButtonText,
  fieldValue,
  fieldSetter,
  submitAction,
}: FormSectionTypes) => {
  return (
    <FormContainer
      onSubmit={() => {
        submitAction(fieldValue[0], fieldValue[1]);
      }}
    >
      {fieldName.map((name, index) => (
        <FormField
          key={name}
          inputName={name}
          inputType={fieldType[index]}
          textSetter={fieldSetter[index]}
        />
      ))}
      <SubmitButton
        type="submit"
        value={submitButtonText}
        variants={SubmitButtonVariants}
        initial="hidden"
        whileInView="visible"
        whileTap={{ scale: 1.04 }}
        whileHover={{
          scale: 1.02,
          cursor: "pointer",
        }}
      />
    </FormContainer>
  );
};

export default FormSection;
