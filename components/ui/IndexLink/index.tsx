import { LinkContainer, LinkTitle } from "./styles";

type TertiaryTitleTypes = {
  decorationAlign: "left" | "right" | "noDecoration";
  content: string;
  url: string;
  className?: string;
  disableAnimations?: boolean;
};

const IndexLinkVariants = {
  hidden: {
    opacity: 0,
    y: "5vh",
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

const IndexLink = ({
  decorationAlign,
  content,
  url,
  className,
  disableAnimations = false,
}: TertiaryTitleTypes) => {
  return (
    <LinkContainer
      variants={disableAnimations ? undefined : IndexLinkVariants}
      href={url}
      className={`${
        decorationAlign === "noDecoration"
          ? ""
          : decorationAlign === "left"
          ? "tertiaryTitleLeft"
          : "tertiaryTitleRight"
      } `}
    >
      <LinkTitle
        whileTap={{ scale: 1.2 }}
        whileHover={{ scale: 1.1, color: "#EFDF64", cursor: "pointer" }}
        className={`${className && className}`}
      >
        {content}
      </LinkTitle>
    </LinkContainer>
  );
};

export default IndexLink;
