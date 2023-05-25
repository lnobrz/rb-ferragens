import {
  IndexSectionContainer,
  SectionHeader,
  MainContent,
  TitlesContainer,
} from "./styles";
import SecondaryTitle from "../SecondaryTitle";
import Paragraph from "../Paragraph";
import TertiaryTitle from "../TertiaryTitle";
import Image from "next/image";
import ArrowButton from "../ArrowButton";
import { buttonsLinks, buttonsTexts } from "@/storage/data";
import IndexLink from "../IndexLink";
type IndexSectionTypes = {
  titleDecorationAlign: "left" | "right";
  sectionTitle: string;
  sectionParagraph: string;
  sectionArr?: {
    id: number;
    name: string;
    optionLink?: string;
  }[];
  advertisementContent?: string;
  hasLinks: boolean;
  className?: string;
  headerClassName?: string;
  paragraphClassName?: string;
  illustrationUrl: string;
  illustrationDescription: string;
  disableParagraphAnimation?: true | false;
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
  className,
  headerClassName,
  illustrationUrl,
  illustrationDescription,
  disableParagraphAnimation,
}: IndexSectionTypes) => {
  return (
    <IndexSectionContainer
      variants={indexSectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${
        titleDecorationAlign === "left"
          ? "leftSectionContainer"
          : "rightSectionContainer"
      } ${className}`}
    >
      <SectionHeader
        variants={indexSectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${sectionTitle === "produtos" && "productsHeader"} ${
          headerClassName && headerClassName
        }`}
      >
        <SecondaryTitle
          decorationAlign={titleDecorationAlign}
          content={sectionTitle}
        />
        <Paragraph
          content={sectionParagraph}
          textHierarchy="main"
          disableAnimations={disableParagraphAnimation}
          className={`indexSectionParagraph ${
            titleDecorationAlign === "left" ? "textStart" : "textEnd"
          } ${sectionTitle === "sobre a rb" && "aboutSectionParagraph"}`}
        />
        {sectionTitle === "sobre a rb" && (
          <ArrowButton
            content={buttonsTexts.aboutSection}
            url={buttonsLinks.about}
            arrowDirection="right"
            textSize="small"
            className="aboutButton"
          />
        )}
      </SectionHeader>
      <MainContent
        variants={indexSectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={sectionTitle === "vantagens" ? "advantagesMain" : ""}
      >
        <TitlesContainer>
          {sectionArr &&
            sectionArr.map((arrItem) => {
              return hasLinks && arrItem.optionLink ? (
                <IndexLink
                  key={arrItem.id}
                  decorationAlign={
                    titleDecorationAlign === "left" ? "right" : "left"
                  }
                  content={arrItem.name}
                  url={arrItem.optionLink}
                />
              ) : (
                <TertiaryTitle
                  key={arrItem.id}
                  decorationAlign={
                    titleDecorationAlign === "left" ? "right" : "left"
                  }
                  content={arrItem.name}
                />
              );
            })}
        </TitlesContainer>
        <Image
          src={illustrationUrl}
          alt={illustrationDescription}
          width={400}
          height={500}
          className="sectionIllustration"
          loading="lazy"
        />
      </MainContent>
      {advertisementContent && (
        <Paragraph
          content={advertisementContent}
          textHierarchy="secondary"
          className={`advertisement ${
            titleDecorationAlign === "left" ? "textEnd" : "textStart"
          }`}
        />
      )}
    </IndexSectionContainer>
  );
};

export default IndexSection;
