import { FooterContainer, FooterLogoContainer, Teste } from "./styles";
import Logo from "../ui/Logo";
import FooterAddresses from "../ui/FooterAddresses";
import FooterContacts from "../ui/FooterContacts";
import FooterRights from "../ui/FooterRights";

const Footer = () => {
  return (
    <FooterContainer>
      <Teste>
        <FooterAddresses />
        <FooterLogoContainer>
          <Logo className="footerLogo" />
        </FooterLogoContainer>
      </Teste>

      <FooterContacts />
      <FooterRights />
    </FooterContainer>
  );
};

export default Footer;
