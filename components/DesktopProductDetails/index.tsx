import SecondaryTitle from "../ui/SecondaryTitle";
import DecoratedImage from "../ui/DecoratedImage";
import TertiaryTitle from "../ui/TertiaryTitle";
import Paragraph from "../ui/Paragraph";
import {
    SectionContainer,
    InformationContainer,
    Teste,
    Teste2,
    Teste3
} from "./styles";
import FilledButton from "../ui/FilledButton";
import ProductTable from "../ui/ProductTable";
import TextButton from "../ui/TextButton";

type ProductDetailsSection = {
    productName: string;
    productImage: string;
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

const DesktopProductDetails = ({
    productName,
    productImage,
    productDescription,
    productRecomendations,
    haveCorteEDobra,
    measurements,
    measurements2,
}: ProductDetailsSection) => {
    return (
        <SectionContainer>
            <Teste>
                <DecoratedImage imageUrl={productImage} imageDescription={productName} className="productDetailsImage" />
                <Teste2>
                    <Teste3>
                        <SecondaryTitle
                            decorationAlign="none"
                            content={productName}
                            className="productDetailsSecondaryTitle"
                        />
                        <Paragraph textHierarchy="secondary" content={productDescription} />
                    </Teste3>
                    <FilledButton
                        size="large"
                        background="yellow"
                        content="Compre Conosco"
                        className="detailsButton"
                    />
                </Teste2>
            </Teste>
            <Paragraph textHierarchy="secondary" content={productRecomendations} />
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
            <TextButton text="Outros Produtos" url="/produtos" />
        </SectionContainer>
    );
};

export default DesktopProductDetails;
