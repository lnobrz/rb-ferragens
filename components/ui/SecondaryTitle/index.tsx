import { TitleContainer } from "./styles";

type SecondaryTitleTypes = {
  decorationAlign: "left" | "right";
  content: string;
};

const SecondaryTitle = ({ decorationAlign, content }: SecondaryTitleTypes) => {
  return (
    <TitleContainer
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
