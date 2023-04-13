import { AddressesContainer } from "./styles";
import Paragraph from "../Paragraph";
import { address } from "@/storage/data";

const FooterAddresses = () => {
  return (
    <AddressesContainer>
      <Paragraph
        textHierarchy="secondary"
        disableAnimations={true}
        content={address.street}
        className="footerAddress"
      />
      <Paragraph
        textHierarchy="secondary"
        disableAnimations={true}
        content={address.neighborhoodCityState}
        className="footerAddress"
      />
      <Paragraph
        textHierarchy="secondary"
        disableAnimations={true}
        content={address.zipCode}
        className="footerAddress"
      />
    </AddressesContainer>
  );
};

export default FooterAddresses;
