import { AddressesContainer } from "./styles";
import Paragraph from "../Paragraph";
import { address } from "@/storage/data";

const FooterAddresses = () => {
  return (
    <AddressesContainer>
      <Paragraph content={address.street} className="footerAddress" />
      <Paragraph
        content={address.neighborhoodCityState}
        className="footerAddress"
      />
      <Paragraph content={address.zipCode} className="footerAddress" />
    </AddressesContainer>
  );
};

export default FooterAddresses;
