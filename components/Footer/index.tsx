import {
  AdressesContainer,
  FooterContainer,
  FooterLogoContainer,
} from "./styles";
import Logo from "../ui/Logo";
import FooterAddresses from "../ui/FooterAddresses";
import FooterContacts from "../ui/FooterContacts";
import FooterRights from "../ui/FooterRights";

const Footer = () => {
  return (
    <FooterContainer>
      <AdressesContainer>
        <FooterAddresses />
        <FooterLogoContainer>
          <Logo className="footerLogo" />
        </FooterLogoContainer>
      </AdressesContainer>
      <FooterContacts />
      <FooterRights />
    </FooterContainer>
  );
};

export default Footer;
