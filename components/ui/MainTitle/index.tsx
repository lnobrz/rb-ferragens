import { TitleContainer, Title, HighlightedText } from "./styles";

const mainTitleVariants = {
  hidden: {
    opacity: 0,
    y: "10vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      mass: 0.1,
      stiffness: 50,
    },
  },
};

const highlightedTextVariants = {
  hidden: {
    color: "#f9f3d7",
  },
  show: {
    color: "#ffdd00",
    transition: {
      type: "spring",
      delay: 2.5,
      duration: 1.5,
    },
  },
};
const MainTitle = () => {
  return (
    <TitleContainer
      variants={mainTitleVariants}
      initial="hidden"
      whileInView="show"
    >
      <Title>
        Bem-vindos a{" "}
        <HighlightedText
          variants={highlightedTextVariants}
          viewport={{ once: true }}
        >
          RB Ferragens
        </HighlightedText>
        , especialista na venda, corte e dobra de ferro e aço.
      </Title>
    </TitleContainer>
  );
};

export default MainTitle;
