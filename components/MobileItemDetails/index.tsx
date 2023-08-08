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
import { buttonsLinks } from "@/storage/data";
import { props } from "./types";

const MobileItemDetails = ({
  sectionName,
  itemName,
  itemImage,
  itemDescription,
  haveCorteEDobra,
  measurements,
  measurements2,
}: props) => {
  return (
    <SectionContainer>
      <SecondaryTitle
        decorationAlign="none"
        content={itemName}
        className="productDetailsSecondaryTitle"
      />
      <DecoratedImage
        imageUrl={itemImage}
        imageDescription={itemName}
        className="productDetailsImage"
      />
      <InformationContainer>
        <Paragraph textrole="secondary" content={itemDescription} />
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
          url={buttonsLinks.budget}
          className="detailsButton"
        />
        <FilledButton
          size="large"
          background="transparent"
          content={
            sectionName === "products" ? "Outros Produtos" : "Outros Serviços"
          }
          url={sectionName === "products" ? "/produtos" : "/servicos"}
          className="detailsButton"
        />
      </ButtonsContainer>
    </SectionContainer>
  );
};

export default MobileItemDetails;
