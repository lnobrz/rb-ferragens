import MobileHeader from "../ui/MobileHeader";
import { paragraphs } from "@/storage/data";
import { CoverContainer, ParagraphContainer } from "./styles";
import Paragraph from "../ui/Paragraph";
import ArrowButton from "../ui/ArrowButton";
import MainTitle from "../ui/MainTitle";
import { buttonsTexts } from "@/storage/data";

const paragraphContainerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      stiffness: 50,
      delay: 1,
      staggerChildren: 1,
    },
  },
};

const Cover = () => {
  return (
    <CoverContainer>
      <MobileHeader />
      <MainTitle />
      <ParagraphContainer variants={paragraphContainerVariants}>
        <Paragraph content={paragraphs.indexCover} />
        <ArrowButton
          content={buttonsTexts.cover}
          arrowDirection="right"
          textSize="medium"
          className="coverButton"
        />
      </ParagraphContainer>
    </CoverContainer>
  );
};

export default Cover;
