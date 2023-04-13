import { HighlightedTextContainer } from "./styles";

type HighlightedTextTypes = {
  className?: string;
  url: string;
};

const HighlightedText = ({ className }: HighlightedTextTypes) => {
  return (
    <HighlightedTextContainer
      className={`${className && className}`}
      whileHover={{ scale: 1.05, cursor: "pointer" }}
      whileTap={{ scale: 1.1 }}
    >
      <span className="HighlightedText">saiba mais</span>
    </HighlightedTextContainer>
  );
};

export default HighlightedText;
