export type props = {
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
