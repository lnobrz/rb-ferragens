import { AboutSectionContainer } from "./styles";
import IndexSection from "../IndexSection";
import { paragraphs } from "@/storage/data";
import ArrowButton from "../ArrowButton";
import { buttonsTexts } from "@/storage/data";

const indexSectionVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
      mass: 0.1,
      stiffness: 50,
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

const IndexAboutSection = () => {
  return (
    <AboutSectionContainer
      variants={indexSectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <IndexSection
        titleDecorationAlign="left"
        sectionTitle="sobre a rb"
        sectionParagraph={paragraphs.indexAboutSection}
        hasLinks={false}
      />
      <ArrowButton
        content={buttonsTexts.aboutSection}
        arrowDirection="right"
        textSize="small"
        className="aboutButton"
      />
    </AboutSectionContainer>
  );
};

export default IndexAboutSection;
