import FormField from "../FormField";
import { FormContainer, SubmitButton } from "./styles";

const inputTypes = ["email", "text", "tel", "textarea"] as const;

type FormSectionTypes = {
  fieldName: string[];
  fieldType: typeof inputTypes[number][];
  submitButtonText: string;
  submitAction: () => void;
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
  submitAction,
}: FormSectionTypes) => {
  return (
    <FormContainer>
      {fieldName.map((name, index) => (
        <FormField key={name} inputName={name} inputType={fieldType[index]} />
      ))}
      <SubmitButton
        type="submit"
        value={submitButtonText}
        onSubmit={submitAction}
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
