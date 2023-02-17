import {
  NumDataContainer,
  NumContainer,
  DataNum,
  HighlightedCaracter,
  DataName,
} from "./styles";

type Data = {
  data: number;
  title: string;
};

const NumData = ({ data, title }: Data) => {
  return (
    <NumDataContainer>
      <NumContainer>
        <DataNum>
          {data}
          <HighlightedCaracter>+</HighlightedCaracter>
        </DataNum>
      </NumContainer>
      <DataName>{title}</DataName>
    </NumDataContainer>
  );
};

export default NumData;
