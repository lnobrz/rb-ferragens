import { ParagraphContainer } from "./styles";

type Paragraph = {
  content: string;
  className?: string;
};

const paragraphVariants = {
  hidden: {
    opacity: 0,
    x: "-5vh",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      stiffness: 50,
    },
  },
};

const Paragraph = ({ content, className }: Paragraph) => {
  return (
    <ParagraphContainer
      variants={paragraphVariants}
      className={className ? className : ""}
    >
      {content}
    </ParagraphContainer>
  );
};

export default Paragraph;
