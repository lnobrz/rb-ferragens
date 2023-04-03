import SecondaryTitle from "../ui/SecondaryTitle";
import DecoratedImage from "../ui/DecoratedImage";
import TertiaryTitle from "../ui/TertiaryTitle";
import Paragraph from "../ui/Paragraph";
import { SectionContainer, TextGroup, ButtonsContainer } from "./styles";
import FilledButton from "../ui/FilledButton";

type ProductDetailsSection = {
  productName: string;
  productDescription: string;
  productRecomendations: string;
  haveCorteEDobra?: boolean;
};

const ProductDetailsSection = ({
  productName,
  productDescription,
  productRecomendations,
  haveCorteEDobra,
}: ProductDetailsSection) => {
  return (
    <SectionContainer>
      <SecondaryTitle
        decorationAlign="left"
        content={productName}
        className="productDetailsSecondaryTitle"
      />
      <DecoratedImage className="productDetailsImage" />
      <TextGroup>
        <TertiaryTitle decorationAlign="left" content="o que é?" />
        <Paragraph content={productDescription} />
      </TextGroup>
      <TextGroup>
        <TertiaryTitle decorationAlign="left" content="onde usar?" />
        <Paragraph content={productRecomendations} />
      </TextGroup>
      {haveCorteEDobra && (
        <TextGroup>
          <TertiaryTitle decorationAlign="left" content="corte e dobra" />
          <DecoratedImage />
        </TextGroup>
      )}
      <ButtonsContainer>
        <FilledButton
          size="large"
          background="yellow"
          content="Compre Conosco"
        />
        <FilledButton
          size="large"
          background="transparent"
          content="Outros Produtos"
        />
      </ButtonsContainer>
    </SectionContainer>
  );
};

export default ProductDetailsSection;
