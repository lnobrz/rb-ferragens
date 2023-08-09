import { ContactContainer } from "./styles";
import Paragraph from "../Paragraph";
import { Props } from "./types";

const FooterContact = ({ contactType, contact }: Props) => {
  return (
    <ContactContainer>
      <Paragraph
        content={contactType}
        textrole="secondary"
        disableAnimations={true}
        className="footerContactTitle"
      />
      <Paragraph
        content={contact}
        textrole="secondary"
        disableAnimations={true}
        className="footerContactInfo"
      />
    </ContactContainer>
  );
};

export default FooterContact;
