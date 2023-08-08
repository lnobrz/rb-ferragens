import Header from "../ui/Header";
import { paragraphs } from "@/storage/data";
import { CoverContainer, ParagraphContainer } from "./styles";
import Paragraph from "../ui/Paragraph";
import ArrowButton from "../ui/ArrowButton";
import MainTitle from "../ui/MainTitle";
import { buttonsTexts } from "@/storage/data";
import { buttonsLinks } from "@/storage/data";
import Layout from "../ui/Layout";
import { animationVariants } from "./animationVariants";
import { props } from "./types";

const Cover = ({ className = "", device = "mobile" }: props) => {
  return (
    <CoverContainer device={device} className={className}>
      <Layout>
        <Header />
        <MainTitle />
        <ParagraphContainer variants={animationVariants}>
          <Paragraph textrole="main" content={paragraphs.indexCover} />
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
