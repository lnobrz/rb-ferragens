import { RightsContainer } from "./styles";
import Paragraph from "../Paragraph";
import { footerRights } from "@/storage/data";

const FooterRights = () => {
  return (
    <RightsContainer>
      <Paragraph
        textHierarchy="secondary"
        disableAnimations={true}
        content={footerRights.copyrights}
        className="footerRight"
      />
    </RightsContainer>
  );
};

export default FooterRights;
