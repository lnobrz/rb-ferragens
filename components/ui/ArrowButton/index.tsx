import { ButtonContainer, ButtonTitle } from "./styles";
import Image from "next/image";

type arrowButtonTypes = {
  content: string;
  arrowDirection: "left" | "right";
  textSize: "small" | "medium" | "large";
  aboutButton?: "true";
};

const ArrowButton = ({
  content,
  arrowDirection,
  textSize,
  aboutButton,
}: arrowButtonTypes) => {
  return (
    <ButtonContainer className={aboutButton === "true" ? "aboutButton" : ""}>
      <ButtonTitle
        className={`${
          textSize === "small"
            ? "smallText"
            : textSize === "medium"
            ? "mediumText"
            : "largeText"
        }`}
      >
        {content}
      </ButtonTitle>
      <Image
        src={`/images/${
          arrowDirection === "left" ? "left" : "right"
        }-arrow.svg`}
        alt={`arrow pointing to the ${
          arrowDirection === "left" ? "left" : "right"
        }`}
        fill={true}
        className="buttonArrow"
      />
    </ButtonContainer>
  );
};

export default ArrowButton;
