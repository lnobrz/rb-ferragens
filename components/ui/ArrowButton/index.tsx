import { ButtonContainer, ButtonTitle } from "./styles";
import Image from "next/image";

type arrowButtonTypes = {
  content: string;
  arrowDirection: "left" | "right";
  textSize: "small" | "medium" | "large";
  additionalClasses?: string;
};

const ArrowButton = ({
  content,
  arrowDirection,
  textSize,
  additionalClasses,
}: arrowButtonTypes) => {
  return (
    <ButtonContainer className={additionalClasses}>
      {arrowDirection === "left" ? (
        <>
          <Image
            src="/images/left-arrow.svg"
            alt="arrow pointing to the left"
            fill={true}
            className="buttonArrow"
          />
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
        </>
      ) : (
        <>
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
            src="/images/right-arrow.svg"
            alt="arrow pointing to the right"
            fill={true}
            className="buttonArrow"
          />
        </>
      )}
    </ButtonContainer>
  );
};

export default ArrowButton;
