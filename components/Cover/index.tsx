import Header from "../ui/Header";
import { paragraphs } from "@/storage/data";
import { CoverContainer, ParagraphContainer } from "./styles";
import Paragraph from "../ui/Paragraph";
import ArrowButton from "../ui/ArrowButton";
import MainTitle from "../ui/MainTitle";
import { buttonsTexts } from "@/storage/data";
import { buttonsLinks } from "@/storage/data";
import Layout from "../ui/Layout";

type CoverProps = {
  className?: string;
};

const paragraphContainerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      stiffness: 50,
      delayChildren: 0.3,
    },
  },
};

const Cover = ({ className = "" }: CoverProps) => {
  return (
    <CoverContainer className={className}>
      <Layout>
        <Header />
        <MainTitle />
        <ParagraphContainer variants={paragraphContainerVariants}>
          <Paragraph textHierarchy="main" content={paragraphs.indexCover} />
          <ArrowButton
            content={buttonsTexts.cover}
            arrowDirection="right"
            textSize="medium"
            url={buttonsLinks.budget}
            className="coverButton"
          />
        </ParagraphContainer>
      </Layout>
    </CoverContainer>
  );
};

export default Cover;
