import { TertiaryTitleContainer } from "./styles";

type TertiaryTitleTypes = {
  decorationAlign: "left" | "right";
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
    <TertiaryTitleContainer
      variants={tertiaryTitleVariants}
      className={
        decorationAlign === "left" ? "tertiaryTitleLeft" : "tertiaryTitleRight"
      }
      whileTap={isLink ? { scale: 1.1 } : { scale: 1 }}
    >
      {content}
    </TertiaryTitleContainer>
  );
};

export default TertiaryTitle;
