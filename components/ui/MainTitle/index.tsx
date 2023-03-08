import { TitleContainer, Title, HighlightedText } from "./styles";

const MainTitle = () => {
  return (
    <TitleContainer
      initial={{ y: "10vh" }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0,
        mass: 0.1,
        stiffness: 50,
      }}
    >
      <Title>
        Bem-vindos à{" "}
        <HighlightedText
          initial={{ color: "#f9f3d7" }}
          animate={{ color: "#ffdd00" }}
          transition={{ type: "spring", delay: 1.2, duration: 1 }}
        >
          RB Ferragens
        </HighlightedText>
        , especialista na venda, corte e dobra de ferro e aço.
      </Title>
    </TitleContainer>
  );
};

export default MainTitle;
