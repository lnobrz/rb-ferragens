import { ImageContainer } from "./styles";
import Image from "next/image";
import { Props } from "./types";

const DecoratedImage = ({ imageUrl, imageDescription, className }: Props) => {
  return (
    <ImageContainer className={className && className}>
      <Image
        src={imageUrl}
        alt={imageDescription}
        fill={true}
        style={{ position: "absolute" }}
        loading="lazy"
      />
    </ImageContainer>
  );
};

export default DecoratedImage;
