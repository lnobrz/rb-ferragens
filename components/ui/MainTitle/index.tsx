import { TitleContainer, Title, HighlightedText } from "./styles";

const MainTitle = () => {
  return (
    <TitleContainer>
      <Title>
        A loja de ferragens que está do seu lado desde a
        <HighlightedText>venda </HighlightedText>
        até o<HighlightedText>corte e dobra </HighlightedText>de
        <HighlightedText>ferro e aço</HighlightedText>.
      </Title>
    </TitleContainer>
  );
};

export default MainTitle;
