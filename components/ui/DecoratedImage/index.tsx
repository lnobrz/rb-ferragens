import { ImageContainer } from "./styles";
import Image from "next/image";

type DecoratedImageTypes = {
  imageUrl: string;
  imageDescription: string;
  className?: string;
};

const DecoratedImage = ({ imageUrl, imageDescription, className }: DecoratedImageTypes) => {
  return (
    <ImageContainer className={className && className}>
      <Image
        src={imageUrl}
        alt={imageDescription}
        fill={true}
        style={{ position: "absolute" }}
      />
    </ImageContainer>
  );
};

export default DecoratedImage;
