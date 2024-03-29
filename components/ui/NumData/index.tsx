import {
  NumDataContainer,
  NumContainer,
  DataNum,
  HighlightedCaracter,
  DataName,
} from "./styles";
import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import { useEffect } from "react";

type Data = {
  data: number;
  title: string;
};

const dataNumVariants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
      mass: 1,
      stiffness: 70,
    },
  },
};

const NumData = ({ data, title }: Data) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, data, {
      duration: 3,
    });

    return animation.stop;
  }, [count, data]);

  return (
    <NumDataContainer variants={dataNumVariants}>
      <NumContainer>
        <DataNum>{rounded}</DataNum>
        <HighlightedCaracter>+</HighlightedCaracter>
      </NumContainer>
      <DataName>{title}</DataName>
    </NumDataContainer>
  );
};

export default NumData;
