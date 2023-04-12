import SecondaryTitle from "../ui/SecondaryTitle";
import DecoratedImage from "../ui/DecoratedImage";
import TertiaryTitle from "../ui/TertiaryTitle";
import Paragraph from "../ui/Paragraph";
import { SectionContainer, TextGroup, ButtonsContainer } from "./styles";
import FilledButton from "../ui/FilledButton";
import ProductTable from "../ui/ProductTable";

type ProductDetailsSection = {
  productName: string;
  productDescription: string;
  productRecomendations: string;
  haveCorteEDobra?: boolean;
  measurements?: {
    tableHeaders: string[];
    tableData:
      | {
          id: number;
          designation: string;
          malhaCentimeters: string;
          bitolaMilimeters: string;
          pieceWeight: string;
        }[]
      | {
          id: number;
          bitolaInches: string;
          bitolaMilimeters: string;
          barWeight: string;
          weightPerMeter: string;
        }[]
      | {
          id: number;
          bitolaMilimeters: string;
          barWeight: string;
          weightPerMeter: string;
        }[];
  };
  measurements2?: {
    tableHeaders: string[];
    tableData: {
      id: number;
      bitolaMilimeters: string;
      barWeight: string;
      weightPerMeter: string;
    }[];
  };
};

const ProductDetailsSection = ({
  productName,
  productDescription,
  productRecomendations,
  haveCorteEDobra,
  measurements,
  measurements2,
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
      {haveCorteEDobra && measurements && (
        <TextGroup>
          <TertiaryTitle decorationAlign="left" content="corte e dobra" />
          <ProductTable
            tableHeaders={measurements.tableHeaders}
            tableData={measurements.tableData}
          />
          {measurements2 && (
            <ProductTable
              tableHeaders={measurements2.tableHeaders}
              tableData={measurements2.tableData}
            />
          )}
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
