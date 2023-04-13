import { ContactContainer } from "./styles";
import Paragraph from "../Paragraph";

type FooterContactTypes = {
  contactType: string;
  contact: string;
};

const FooterContact = ({ contactType, contact }: FooterContactTypes) => {
  return (
    <ContactContainer>
      <Paragraph
        content={contactType}
        textHierarchy="secondary"
        disableAnimations={true}
        className="footerContactTitle"
      />
      <Paragraph
        content={contact}
        textHierarchy="secondary"
        disableAnimations={true}
        className="footerContactInfo"
      />
    </ContactContainer>
  );
};

export default FooterContact;
