import { BudgetSectionContainer } from "./styles";
import ArrowButton from "../ArrowButton";
import { buttonsTexts, buttonsLinks } from "@/storage/data";

const BudgetSection = () => {
  return (
    <BudgetSectionContainer>
      <ArrowButton
        content={buttonsTexts.budgetSection}
        arrowDirection="left"
        textSize="large"
        url={buttonsLinks.budget}
        className="justifyEnd budgetButton"
      />
    </BudgetSectionContainer>
  );
};

export default BudgetSection;
