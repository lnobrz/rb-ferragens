import SecondaryTitle from "../ui/SecondaryTitle";
import DecoratedImage from "../ui/DecoratedImage";
import TertiaryTitle from "../ui/TertiaryTitle";
import Paragraph from "../ui/Paragraph";
import {
  SectionContainer,
  InformationContainer,
  ButtonsContainer,
} from "./styles";
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
        decorationAlign="none"
        content={productName}
        className="productDetailsSecondaryTitle"
      />
      <DecoratedImage className="productDetailsImage" />
      <InformationContainer>
        <Paragraph content={productDescription} />
        <Paragraph content={productRecomendations} />
      </InformationContainer>
      {haveCorteEDobra && measurements && (
        <InformationContainer>
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
        </InformationContainer>
      )}
      <ButtonsContainer>
        <FilledButton
          size="large"
          background="yellow"
          content="Compre Conosco"
          className="detailsButton"
        />
        <FilledButton
          size="large"
          background="transparent"
          content="Outros Produtos"
          className="detailsButton"
        />
      </ButtonsContainer>
    </SectionContainer>
  );
};

export default ProductDetailsSection;
