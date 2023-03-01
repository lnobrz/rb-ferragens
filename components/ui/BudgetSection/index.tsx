import { BudgetSectionContainer } from "./styles";
import ArrowButton from "../ArrowButton";
const BudgetSection = () => {
  return (
    <BudgetSectionContainer>
      <ArrowButton
        content="pedir orçamento"
        arrowDirection="left"
        textSize="large"
        additionalClasses="justifyEnd"
      />
    </BudgetSectionContainer>
  );
};

export default BudgetSection;
