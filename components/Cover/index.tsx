import MobileHeader from "../ui/MobileHeader";
import { paragraphs } from "@/storage/data";
import { CoverContainer, ParagraphContainer } from "./styles";
import Paragraph from "../ui/Paragraph";
import BudgetButton from "../ui/BudgetButton";
import MainTitle from "../ui/MainTitle";

const Cover = () => {
  return (
    <CoverContainer>
      <MobileHeader />
      <MainTitle />
      <ParagraphContainer>
        <Paragraph content={paragraphs.indexCover} />
        <BudgetButton />
      </ParagraphContainer>
    </CoverContainer>
  );
};

export default Cover;
