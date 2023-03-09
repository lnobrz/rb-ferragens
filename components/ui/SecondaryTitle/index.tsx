import { TitleContainer } from "./styles";

type SecondaryTitleTypes = {
  decorationAlign: "left" | "right";
  content: string;
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

const SecondaryTitle = ({ decorationAlign, content }: SecondaryTitleTypes) => {
  return (
    <TitleContainer
      variants={secondaryTitleVariants}
      className={
        decorationAlign === "left"
          ? "secondaryTitleLeft"
          : "secondaryTitleRight"
      }
    >
      {content}
    </TitleContainer>
  );
};

export default SecondaryTitle;
