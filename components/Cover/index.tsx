import Header from "../ui/Header";
import { paragraphs } from "@/storage/data";
import { CoverContainer, ParagraphContainer } from "./styles";
import Paragraph from "../ui/Paragraph";
import ArrowButton from "../ui/ArrowButton";
import MainTitle from "../ui/MainTitle";
import { buttonsTexts } from "@/storage/data";
import useDeviceInfo from "@/hooks/useDeviceInfo";

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
      delayChildren: 0.5,
    },
  },
};

const Cover = () => {
  const device = useDeviceInfo();

  return (
    <CoverContainer device={device}>
      <Header />
      <MainTitle />
      <ParagraphContainer variants={paragraphContainerVariants}>
        <Paragraph content={paragraphs.indexCover} />
        <ArrowButton
          content={buttonsTexts.cover}
          arrowDirection="right"
          textSize="medium"
          className="coverButton"
        />
      </ParagraphContainer>
    </CoverContainer>
  );
};

export default Cover;
