import { ButtonContainer } from "./styles";

type FilledButtonTypes = {
  disableAnimations?: boolean;
  content: string;
  background: "yellow" | "transparent";
  size: "small" | "large";
  className?: string;
  buttonLink: string;
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
  className,
  buttonLink,
}: FilledButtonTypes) => {
  return (
    <ButtonContainer
      variants={disableAnimations === true ? undefined : FilledButtonVariants}
      initial="hidden"
      whileInView="visible"
      whileTap={{ scale: 1.04 }}
      whileHover={{
        scale: 1.02,
        cursor: "pointer",
      }}
      background={background}
      size={size}
      className={className}
      href={buttonLink}
    >
      {content}
    </ButtonContainer>
  );
};

export default FilledButton;
