import FormField from "../FormField";
import { animationVariants } from "./animationVariants";
import { FormContainer, SubmitButton } from "./styles";
import { Props } from "./types";

const FormSection = ({
  fieldName,
  fieldType,
  submitButtonText,
  fieldValue,
  fieldSetter,
  submitAction,
}: Props) => {
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
        variants={animationVariants}
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
