import { ContactSectionContainer, ButtonsContainer, Teste } from "./styles";
import FormSection from "../ui/FormSection";
import Paragraph from "../ui/Paragraph";
import FilledButton from "../ui/FilledButton";

const ContactSection = () => {
  return (
    <ContactSectionContainer>
      <FormSection
        fieldName={["Nome", "Mensagem"]}
        fieldType={["text", "textarea"]}
        submitButtonText="Enviar"
        submitAction={() => console.log("oi")}
      />
      <Teste>
        <Paragraph
          content="Ou"
          textHierarchy="secondary"
          className="contactSectionParagraph"
        />
        <ButtonsContainer>
          <FilledButton
            content="Whatsapp"
            background="transparent"
            size="large"
            className="contactButton"
          />
          <FilledButton
            content="Email"
            background="transparent"
            size="large"
            className="contactButton"
          />
          <FilledButton
            content="Telefone"
            background="transparent"
            size="large"
            className="contactButton"
          />
        </ButtonsContainer>
      </Teste>
    </ContactSectionContainer>
  );
};

export default ContactSection;
