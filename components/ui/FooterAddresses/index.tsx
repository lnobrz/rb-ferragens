import { AddressesContainer } from "./styles";
import Paragraph from "../Paragraph";
import { address } from "@/storage/data";

const FooterAddresses = () => {
  return (
    <AddressesContainer>
      {Object.values(address).map((value, index) => {
        return (
          <Paragraph
            key={index}
            textrole="secondary"
            disableAnimations={true}
            content={value}
            className="footerAddress"
          />
        );
      })}
    </AddressesContainer>
  );
};

export default FooterAddresses;
