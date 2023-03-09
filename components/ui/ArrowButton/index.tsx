import { ButtonContainer, ButtonTitle } from "./styles";
import Image from "next/image";

type arrowButtonTypes = {
  content: string;
  arrowDirection: "left" | "right";
  textSize: "small" | "medium" | "large";
  className?: string;
};

const arrowButtonVariants = {
  hidden: {
    opacity: 0,
    x: "-5vh",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0,
      stiffness: 50,
    },
  },
};

const ArrowButton = ({
  content,
  arrowDirection,
  textSize,
  className,
}: arrowButtonTypes) => {
  return (
    <ButtonContainer
      variants={arrowButtonVariants}
      whileTap={{ scale: 1.1 }}
      className={className}
    >
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
