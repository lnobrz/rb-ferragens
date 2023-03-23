import { TitleDiv, TertiaryTitleContainer } from "./styles";

type TertiaryTitleTypes = {
  decorationAlign: "left" | "right" | "noDecoration";
  content: string;
  isLink: boolean;
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
  isLink,
}: TertiaryTitleTypes) => {
  return (
    <TitleDiv
      variants={tertiaryTitleVariants}
      className={
        decorationAlign === "noDecoration"
          ? ""
          : decorationAlign === "left"
          ? "tertiaryTitleLeft"
          : "tertiaryTitleRight"
      }
    >
      <TertiaryTitleContainer
        whileTap={isLink ? { scale: 1.2 } : { scale: 1 }}
        whileHover={
          isLink ? { scale: 1.1, color: "#ffdd00", cursor: "pointer" } : ""
        }
      >
        {content}
      </TertiaryTitleContainer>
    </TitleDiv>
  );
};

export default TertiaryTitle;
