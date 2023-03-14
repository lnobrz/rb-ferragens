import { IndexSectionContainer, SectionHeader } from "./styles";
import SecondaryTitle from "../SecondaryTitle";
import Paragraph from "../Paragraph";
import TertiaryTitle from "../TertiaryTitle";

type IndexSectionTypes = {
  titleDecorationAlign: "left" | "right";
  sectionTitle: string;
  sectionParagraph: string;
  sectionArr?: {
    id: number;
    name: string;
  }[];
  advertisementContent?: string;
  hasLinks: boolean;
};

const indexSectionVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
      mass: 0.1,
      stiffness: 50,
      staggerChildren: 0.2,
    },
  },
};

const IndexSection = ({
  titleDecorationAlign,
  sectionTitle,
  sectionParagraph,
  sectionArr,
  advertisementContent,
  hasLinks,
}: IndexSectionTypes) => {
  return (
    <IndexSectionContainer
      variants={indexSectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={
        titleDecorationAlign === "left"
          ? "leftSectionContainer"
          : "rightSectionContainer"
      }
    >
      <SectionHeader
        className={sectionTitle === "produtos" ? "productsHeader" : ""}
      >
        <SecondaryTitle
          decorationAlign={titleDecorationAlign}
          content={sectionTitle}
        />
        <Paragraph
          content={sectionParagraph}
          className={`indexSectionParagraph ${
            titleDecorationAlign === "left" ? "textStart" : "textEnd"
          }`}
        />
      </SectionHeader>
      {sectionArr &&
        sectionArr.map((arrItem) => {
          return (
            <TertiaryTitle
              key={arrItem.id}
              decorationAlign={
                titleDecorationAlign === "left" ? "right" : "left"
              }
              content={arrItem.name}
              isLink={hasLinks}
            />
          );
        })}
      {advertisementContent && (
        <Paragraph
          content={advertisementContent}
          className={`advertisement ${
            titleDecorationAlign === "left" ? "textEnd" : "textStart"
          }`}
        />
      )}
    </IndexSectionContainer>
  );
};

export default IndexSection;
