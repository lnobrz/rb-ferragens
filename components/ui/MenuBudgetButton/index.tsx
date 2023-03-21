import { ButtonContainer } from "./styles";

type MenuBudgetButtonTypes = {
  disableAnimations?: boolean;
};

const MenuBudgetButtonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.7 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const MenuBudgetButton = ({
  disableAnimations = false,
}: MenuBudgetButtonTypes) => {
  return (
    <ButtonContainer
      variants={
        disableAnimations === true ? undefined : MenuBudgetButtonVariants
      }
      whileTap={{ scale: 1.2 }}
      whileHover={{
        scale: 1.1,
        cursor: "pointer",
      }}
    >
      Orçamento
    </ButtonContainer>
  );
};

export default MenuBudgetButton;
