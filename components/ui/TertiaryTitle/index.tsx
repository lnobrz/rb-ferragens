import { TitleDiv, TertiaryTitleContainer } from "./styles";

type TertiaryTitleTypes = {
  decorationAlign: "left" | "right" | "noDecoration";
  content: string;
  className?: string;
  disableAnimations?: boolean;
};

const tertiaryTitleVariants = {
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

const TertiaryTitle = ({
  decorationAlign,
  content,
  className,
  disableAnimations = false,
}: TertiaryTitleTypes) => {
  return (
    <TitleDiv
      variants={disableAnimations ? undefined : tertiaryTitleVariants}
      className={`${
        decorationAlign === "noDecoration"
          ? ""
          : decorationAlign === "left"
          ? "tertiaryTitleLeft"
          : "tertiaryTitleRight"
      } `}
    >
      <TertiaryTitleContainer
        whileTap={{ scale: 1 }}
        className={`${className && className}`}
      >
        {content}
      </TertiaryTitleContainer>
    </TitleDiv>
  );
};

export default TertiaryTitle;
