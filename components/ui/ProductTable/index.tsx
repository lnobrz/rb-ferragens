import { TableContainer } from "./styles";

type ProductTableTypes = {
  tableHeaders?: string[];
  tableData?:
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

const ProductTable = ({ tableHeaders, tableData }: ProductTableTypes) => {
  return (
    <>
      {tableHeaders && tableData && (
        <TableContainer>
          <thead>
            <tr>
              {tableHeaders.map((title) => (
                <th key={title}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((dataObject) => (
              <tr key={dataObject.id}>
                {Object.values(dataObject).map((data) => {
                  if (typeof data === "number") {
                    return;
                  } else {
                    return <td key={data}>{data}</td>;
                  }
                })}
              </tr>
            ))}
          </tbody>
        </TableContainer>
      )}
    </>
  );
};

export default ProductTable;
