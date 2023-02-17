import { TitleContainer, Title } from "./styles";

const MainTitle = () => {
  return (
    <TitleContainer>
      <Title>
        A loja de ferragens que está do seu lado desde a
        <span className="highlitedText">venda </span>
        até o<span className="highlitedText">corte e dobra de ferro e aço</span>
        .
      </Title>
    </TitleContainer>
  );
};

export default MainTitle;
