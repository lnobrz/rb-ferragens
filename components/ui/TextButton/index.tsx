import { TextButtonContainer } from "./styles";
import Link from "next/link";

type TextButtonTypes = {
  className?: string;
};

const TextButton = ({ className }: TextButtonTypes) => {
  return (
    <TextButtonContainer
      className={`${className && className}`}
      whileHover={{ scale: 1.05, cursor: "pointer" }}
      whileTap={{ scale: 1.1 }}
    >
      <Link href="" className="textButton">
        saiba mais
      </Link>
    </TextButtonContainer>
  );
};

export default TextButton;
