import { AboutSectionContainer } from "./styles";
import IndexSection from "../IndexSection";
import { paragraphs } from "@/storage/data";
import ArrowButton from "../ArrowButton";

const IndexAboutSection = () => {
  return (
    <AboutSectionContainer>
      <IndexSection
        titleDecorationAlign="left"
        sectionTitle="sobre a rb"
        sectionParagraph={paragraphs.indexAboutSection}
      />
      <ArrowButton
        content="saiba mais"
        arrowDirection="right"
        textSize="small"
        aboutButton="true"
      />
    </AboutSectionContainer>
  );
};

export default IndexAboutSection;
