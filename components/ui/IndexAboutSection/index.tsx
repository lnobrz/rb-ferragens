import { AboutSectionContainer } from "./styles";
import IndexSection from "../IndexSection";
import { paragraphs } from "@/storage/data";
import ArrowButton from "../ArrowButton";
import { buttonsTexts } from "@/storage/data";

const IndexAboutSection = () => {
  return (
    <AboutSectionContainer>
      <IndexSection
        titleDecorationAlign="left"
        sectionTitle="sobre a rb"
        sectionParagraph={paragraphs.indexAboutSection}
      />
      <ArrowButton
        content={buttonsTexts.aboutSection}
        arrowDirection="right"
        textSize="small"
        additionalClasses="aboutButton"
      />
    </AboutSectionContainer>
  );
};

export default IndexAboutSection;
