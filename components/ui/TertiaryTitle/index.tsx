import { TertiaryTitleContainer } from "./styles";

type TertiaryTitleTypes = {
  decorationAlign: "left" | "right";
  content: string;
};

const TertiaryTitle = ({ decorationAlign, content }: TertiaryTitleTypes) => {
  return (
    <TertiaryTitleContainer
      className={
        decorationAlign === "left" ? "tertiaryTitleLeft" : "tertiaryTitleRight"
      }
    >
      {content}
    </TertiaryTitleContainer>
  );
};

export default TertiaryTitle;
