import { IndexSectionContainer } from "./styles";
import SecondaryTitle from "../SecondaryTitle";
import Paragraph from "../Paragraph";
import TertiaryTitle from "../TertiaryTitle";

type IndexSectionTypes = {
  titleDecorationAlign: "left" | "right";
  sectionTitle: string;
  sectionParagraph: string;
  sectionArr: {
    id: number;
    name: string;
  }[];
};

const IndexSection = ({
  titleDecorationAlign,
  sectionTitle,
  sectionParagraph,
  sectionArr,
}: IndexSectionTypes) => {
  return (
    <IndexSectionContainer>
      <SecondaryTitle
        decorationAlign={titleDecorationAlign}
        content={sectionTitle}
      />
      <Paragraph content={sectionParagraph} className="indexSectionParagraph" />
      {sectionArr.map((arrItem) => {
        return (
          <TertiaryTitle
            key={arrItem.id}
            decorationAlign="left"
            content={arrItem.name}
          />
        );
      })}
    </IndexSectionContainer>
  );
};

export default IndexSection;
