import MobileHeader from "../ui/MobileHeader";
import { coverParagraph } from "@/storage/strings";
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
        <Paragraph text={coverParagraph} />
        <BudgetButton />
      </ParagraphContainer>
    </CoverContainer>
  );
};

export default Cover;
