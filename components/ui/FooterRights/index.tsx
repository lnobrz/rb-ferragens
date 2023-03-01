import { RightsContainer } from "./styles";
import Paragraph from "../Paragraph";
import { footerRights } from "@/storage/data";

const FooterRights = () => {
  return (
    <RightsContainer>
      <Paragraph content={footerRights.author} className="footerRight" />
      <Paragraph content={footerRights.copyrights} className="footerRight" />
    </RightsContainer>
  );
};

export default FooterRights;
