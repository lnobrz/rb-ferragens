import { CardContainer, ImageContainer } from "./styles";
import Image from "next/image";
import TertiaryTitle from "../TertiaryTitle";
import Paragraph from "../Paragraph";
import HighlightedText from "../HighlightedText";
import Link from "next/link";

type OptionCardTypes = {
  title: string;
  description: string;
  imageUrl: string;
  optionLink: string;
};

const optionCardVariants = {
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

const OptionCard = ({
  title,
  description,
  imageUrl,
  optionLink,
}: OptionCardTypes) => {
  return (
    <CardContainer
      variants={optionCardVariants}
      whileHover={{
        scale: 1.05,
        cursor: "pointer",
        borderBottom: "1px solid #EFDF64",
        transition: { mass: 10, duration: 0.3 },
      }}
    >
      <Link
        href={optionLink}
        className="optionLink"
        style={{ textDecoration: "none" }}
      >
        <ImageContainer>
          <Image
            src={imageUrl}
            fill={true}
            alt={title}
            className="optionCardImage"
          />
        </ImageContainer>
        <TertiaryTitle
          disableAnimations={true}
          content={title}
          decorationAlign="noDecoration"
          className="optionCardTitle"
        />
        <Paragraph
          disableAnimations={true}
          textrole="secondary"
          className="optionCardParagraph"
          content={description}
        />
        <HighlightedText url={optionLink} className="optionCardButton" />
      </Link>
    </CardContainer>
  );
};

export default OptionCard;
