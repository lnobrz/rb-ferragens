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
        additionalClasses="justifyEnd"
      />
    </BudgetSectionContainer>
  );
};

export default BudgetSection;
