import {
  ContactSectionContainer,
  ButtonsContainer,
  MainContent,
} from "./styles";
import SecondaryTitle from "../ui/SecondaryTitle";
import FormSection from "../ui/FormSection";
import Paragraph from "../ui/Paragraph";
import FilledButton from "../ui/FilledButton";
import sendMessage from "@/helpers/sendMessage";
import { useState } from "react";
import { buttonsLinks } from "@/storage/data";

const ContactSection = () => {
  const [clientName, setClientName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <ContactSectionContainer>
      <SecondaryTitle decorationAlign="left" content="Fale Conosco" />
      <MainContent>
        <FormSection
          fieldName={["Nome", "Mensagem"]}
          fieldType={["text", "textarea"]}
          submitButtonText="Enviar"
          submitAction={sendMessage}
          fieldValue={[clientName, message]}
          fieldSetter={[setClientName, setMessage]}
        />
        <ButtonsContainer>
          <Paragraph
            content="Ou"
            textrole="secondary"
            className="contactSectionParagraph"
          />
          <FilledButton
            content="Whatsapp"
            background="transparent"
            size="large"
            url={buttonsLinks.budget}
            className="contactButton"
          />
          <FilledButton
            content="Email"
            background="transparent"
            size="large"
            url={buttonsLinks.email}
            className="contactButton"
          />
          <FilledButton
            content="Telefone"
            background="transparent"
            size="large"
            url={buttonsLinks.phone}
            className="contactButton"
          />
        </ButtonsContainer>
      </MainContent>
    </ContactSectionContainer>
  );
};

export default ContactSection;
