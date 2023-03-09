import { TertiaryTitleContainer } from "./styles";

type TertiaryTitleTypes = {
  decorationAlign: "left" | "right";
  content: string;
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

const TertiaryTitle = ({ decorationAlign, content }: TertiaryTitleTypes) => {
  return (
    <TertiaryTitleContainer
      variants={tertiaryTitleVariants}
      className={
        decorationAlign === "left" ? "tertiaryTitleLeft" : "tertiaryTitleRight"
      }
    >
      {content}
    </TertiaryTitleContainer>
  );
};

export default TertiaryTitle;
