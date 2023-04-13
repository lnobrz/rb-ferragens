import { TextButtonContainer } from "./styles";

type HighlightedTextTypes = {
    text: string;
    url: string;
    className?: string;
};

const TextButton = ({ text, url, className }: HighlightedTextTypes) => {
    return (
        <TextButtonContainer
            className={`${className && className}`}
            whileHover={{ scale: 1.01, cursor: "pointer", transition: { type: "spring", stiffness: 300, damping: 24 } }}
            whileTap={{ scale: 1.02 }}
            href={url}
        >
            {text}
        </TextButtonContainer>
    );
};

export default TextButton;
