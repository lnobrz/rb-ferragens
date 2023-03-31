import { TextButtonContainer } from "./styles";

type TextButtonTypes = {
  className?: string;
  url: string;
};

const TextButton = ({ className }: TextButtonTypes) => {
  return (
    <TextButtonContainer
      className={`${className && className}`}
      whileHover={{ scale: 1.05, cursor: "pointer" }}
      whileTap={{ scale: 1.1 }}
    >
      <span className="textButton">saiba mais</span>
    </TextButtonContainer>
  );
};

export default TextButton;
