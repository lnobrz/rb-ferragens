import { ParagraphContainer } from "./styles";

type Paragraph = {
  text: string;
};

const Paragraph = ({ text }: Paragraph) => {
  return <ParagraphContainer>{text}</ParagraphContainer>;
};

export default Paragraph;
