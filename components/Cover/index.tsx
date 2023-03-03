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
      <ParagraphContainer>
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
