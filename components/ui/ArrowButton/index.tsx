import { ButtonContainer, ButtonTitle } from "./styles";
import Image from "next/image";

type arrowButtonTypes = {
  content: string;
  arrowDirection: "left" | "right";
  textSize: "small" | "medium" | "large";
  url: string;
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
  url,
  className,
}: arrowButtonTypes) => {
  return (
    <ButtonContainer
      variants={arrowButtonVariants}
      whileHover={{ scale: 1.05, cursor: "pointer" }}
      whileTap={{ scale: 1.1 }}
      href={url}
      className={className}
    >
      {arrowDirection === "left" ? (
        <>
          <Image
            src="/images/left-arrow.svg"
            alt="arrow pointing to the left"
            width={100}
            height={60}
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
