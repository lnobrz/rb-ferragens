import { TitleContainer } from "./styles";

type SecondaryTitleTypes = {
  decorationAlign: "left" | "right" | "none";
  content: string;
  className?: string;
  disableAnimations?: boolean;
};

const secondaryTitleVariants = {
  hidden: {
    opacity: 0,
    y: "5vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      mass: 0.1,
      stiffness: 50,
    },
  },
};

const SecondaryTitle = ({
  decorationAlign,
  content,
  className,
  disableAnimations = false,
}: SecondaryTitleTypes) => {
  return (
    <TitleContainer
      variants={disableAnimations ? undefined : secondaryTitleVariants}
      className={`${decorationAlign === "left"
        ? "secondaryTitleLeft"
        : decorationAlign === "right" ? "secondaryTitleRight" : ""
        } ${className && className}`}
    >
      {content}
    </TitleContainer>
  );
};

export default SecondaryTitle;
