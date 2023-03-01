import { FooterContainer, FooterLogoContainer } from "./styles";
import Logo from "../ui/Logo";
import FooterAddresses from "../ui/FooterAddresses";
import FooterContacts from "../ui/FooterContacts";
import FooterRights from "../ui/FooterRights";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogoContainer>
        <Logo logoDirection="right" className="footerLogo" />
      </FooterLogoContainer>
      <FooterAddresses />
      <FooterContacts />
      <FooterRights />
    </FooterContainer>
  );
};

export default Footer;
