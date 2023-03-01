import { ContactContainer } from "./styles";
import Paragraph from "../Paragraph";

type FooterContactTypes = {
  contactType: string;
  contact: string;
};

const FooterContact = ({ contactType, contact }: FooterContactTypes) => {
  return (
    <ContactContainer>
      <Paragraph content={contactType} className="footerContactTitle" />
      <Paragraph content={contact} className="footerContactInfo" />
    </ContactContainer>
  );
};

export default FooterContact;
