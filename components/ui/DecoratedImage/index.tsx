import { ImageContainer } from "./styles";
import Image from "next/image";

type DecoratedImageTypes = {
  className?: string;
};

const DecoratedImage = ({ className }: DecoratedImageTypes) => {
  return (
    <ImageContainer className={className && className}>
      <Image
        src="/images/teste.png"
        alt="teste"
        fill={true}
        style={{ position: "absolute" }}
      />
    </ImageContainer>
  );
};

export default DecoratedImage;
