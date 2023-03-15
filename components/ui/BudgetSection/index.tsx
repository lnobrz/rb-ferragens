import { BudgetSectionContainer } from "./styles";
import ArrowButton from "../ArrowButton";
import { buttonsTexts } from "@/storage/data";
const BudgetSection = () => {
  return (
    <BudgetSectionContainer>
      <ArrowButton
        content={buttonsTexts.budgetSection}
        arrowDirection="left"
        textSize="large"
        className="justifyEnd budgetButton"
      />
    </BudgetSectionContainer>
  );
};

export default BudgetSection;
