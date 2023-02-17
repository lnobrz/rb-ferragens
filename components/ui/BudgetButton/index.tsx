import { ButtonContainer, ButtonTitle } from "./styles";
import Image from "next/image";

const BudgetButton = () => {
  return (
    <ButtonContainer>
      <ButtonTitle>Fazer Orçamento</ButtonTitle>
      <Image
        src="/images/right-arrow.svg"
        alt="arrow pointing to the right"
        fill={true}
        className="buttonArrow"
      />
    </ButtonContainer>
  );
};

export default BudgetButton;
