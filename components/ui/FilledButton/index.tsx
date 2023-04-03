import { ButtonContainer } from "./styles";

type FilledButtonTypes = {
  disableAnimations?: boolean;
  content: string;
  background: "yellow" | "transparent";
  size: "small" | "large";
};

const FilledButtonVariants = {
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

const FilledButton = ({
  disableAnimations = false,
  content,
  background,
  size,
}: FilledButtonTypes) => {
  return (
    <ButtonContainer
      variants={disableAnimations === true ? undefined : FilledButtonVariants}
      initial="hidden"
      whileInView="visible"
      whileTap={{ scale: 1.2 }}
      whileHover={{
        scale: 1.1,
        cursor: "pointer",
      }}
      background={background}
      size={size}
    >
      {content}
    </ButtonContainer>
  );
};

export default FilledButton;
