import { ParagraphContainer } from "./styles";

type Paragraph = {
  content: string;
  className?: string;
};

const Paragraph = ({ content, className }: Paragraph) => {
  return (
    <ParagraphContainer className={className ? className : ""}>
      {content}
    </ParagraphContainer>
  );
};

export default Paragraph;
