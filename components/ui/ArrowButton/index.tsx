import { ButtonContainer, ButtonTitle } from "./styles";
import { props } from "./types";
import { animationVariants } from "./animationVariants";

const ArrowButton = ({
  content,
  arrowDirection,
  textSize,
  url,
  className,
}: props) => {
  return (
    <ButtonContainer
      variants={animationVariants}
      whileHover={{ scale: 1.05, cursor: "pointer" }}
      whileTap={{ scale: 1.1 }}
      href={url}
      className={className}
    >
      <ButtonTitle
        className={`${
          textSize === "small"
            ? "smallText"
            : textSize === "medium"
            ? "mediumText"
            : "largeText"
        }`}
        arrowDirection={arrowDirection}
      >
        {content}
      </ButtonTitle>
    </ButtonContainer>
  );
};

export default ArrowButton;
