import MobileHeader from "../ui/MobileHeader";
import { paragraphs } from "@/storage/data";
import { CoverContainer, ParagraphContainer } from "./styles";
import Paragraph from "../ui/Paragraph";
import ArrowButton from "../ui/ArrowButton";
import MainTitle from "../ui/MainTitle";
import { buttonsTexts } from "@/storage/data";

const Cover = () => {
  return (
    <CoverContainer>
      <MobileHeader />
      <MainTitle />
      <ParagraphContainer
        initial={{ opacity: 0, x: "-5vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          duration: 1,
          bounce: 0,
          mass: 0.1,
          stiffness: 50,
          delay: 0.5,
        }}
      >
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
