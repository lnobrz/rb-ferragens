import { animationVariants } from "./animationVariants";
import { ButtonContainer } from "./styles";
import { Props } from "./types";

const FilledButton = ({
  disableAnimations = false,
  content,
  background,
  size,
  className,
  url,
}: Props) => {
  return (
    <ButtonContainer
      variants={disableAnimations === true ? undefined : animationVariants}
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
      href={url}
      viewport={{ once: true }}
    >
      {content}
    </ButtonContainer>
  );
};

export default FilledButton;
