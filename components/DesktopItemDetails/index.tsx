import SecondaryTitle from "../ui/SecondaryTitle";
import DecoratedImage from "../ui/DecoratedImage";
import TertiaryTitle from "../ui/TertiaryTitle";
import Paragraph from "../ui/Paragraph";
import {
  SectionContainer,
  InformationContainer,
  MainProductDetails,
  DescriptionContainer,
  MainInformationContainer,
} from "./styles";
import FilledButton from "../ui/FilledButton";
import ProductTable from "../ui/ProductTable";
import TextButton from "../ui/TextButton";
import { buttonsLinks } from "@/storage/data";

type ProductDetailsSection = {
  sectionName: "products" | "services";
  itemName: string;
  itemImage: string;
  itemDescription: string;
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

const DesktopItemDetails = ({
  sectionName,
  itemName,
  itemImage,
  itemDescription,
  haveCorteEDobra,
  measurements,
  measurements2,
}: ProductDetailsSection) => {
  return (
    <SectionContainer>
      <MainProductDetails>
        <DecoratedImage
          imageUrl={itemImage}
          imageDescription={itemName}
          className="productDetailsImage"
        />
        <MainInformationContainer>
          <DescriptionContainer>
            <SecondaryTitle
              decorationAlign="none"
              content={itemName}
              className="productDetailsSecondaryTitle"
            />
            <Paragraph textrole="secondary" content={itemDescription} />
          </DescriptionContainer>
          <FilledButton
            size="large"
            background="yellow"
            content="Compre Conosco"
            url={buttonsLinks.budget}
            className="detailsButton"
          />
        </MainInformationContainer>
      </MainProductDetails>
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
      <TextButton
        text={
          sectionName === "products" ? "Outros Produtos" : "Outros Serviços"
        }
        url={sectionName === "products" ? "/produtos" : "/servicos"}
      />
    </SectionContainer>
  );
};

export default DesktopItemDetails;
