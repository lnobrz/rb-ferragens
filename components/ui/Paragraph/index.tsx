import { ParagraphContainer } from "./styles";

type Paragraph = {
  content: string;
  className?: string;
  disableAnimations?: true | false;
  textrole: "main" | "secondary";
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

const Paragraph = ({
  content,
  className,
  textrole,
  disableAnimations,
}: Paragraph) => {
  return (
    <ParagraphContainer
      variants={disableAnimations ? undefined : paragraphVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className && className}
      textrole={textrole}
    >
      {content}
    </ParagraphContainer>
  );
};

export default Paragraph;
