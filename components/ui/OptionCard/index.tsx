import { CardContainer, ImageContainer } from "./styles";
import Image from "next/image";
import TertiaryTitle from "../TertiaryTitle";
import Paragraph from "../Paragraph";
import TextButton from "../TextButton";

type OptionCardTypes = {
  title: string;
  description: string;
  imageUrl: string;
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

const OptionCard = ({ title, description, imageUrl }: OptionCardTypes) => {
  return (
    <CardContainer
      variants={optionCardVariants}
      whileHover={{
        scale: 1.05,
        cursor: "pointer",
        borderBottom: "1px solid #ffdd00",
        transition: { mass: 10, duration: 0.3 },
      }}
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
        isLink={false}
        className="optionCardTitle"
      />
      <Paragraph
        disableAnimations={true}
        className="optionCardParagraph"
        content={description}
      />
      <TextButton className="optionCardButton" />
    </CardContainer>
  );
};

export default OptionCard;
