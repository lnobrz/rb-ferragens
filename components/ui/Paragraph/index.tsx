import { ParagraphContainer, MotionParagraphContainer } from "./styles";

type Paragraph = {
  content: string;
  className?: string;
  disableAnimations?: true | false;
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

const Paragraph = ({ content, className, disableAnimations }: Paragraph) => {
  return (
    <>
      {disableAnimations ? (
        <ParagraphContainer className={className ? className : ""}>
          {content}
        </ParagraphContainer>
      ) : (
        <MotionParagraphContainer
          variants={paragraphVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={className ? className : ""}
        >
          {content}
        </MotionParagraphContainer>
      )}
    </>
  );
};

export default Paragraph;
