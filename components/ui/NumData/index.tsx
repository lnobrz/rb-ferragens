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

const NumData = ({ data, title }: Data) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, data);

    return controls.stop;
  }, [count, data]);
  return (
    <NumDataContainer>
      <NumContainer>
        <DataNum>
          <motion.div>{rounded}</motion.div>
        </DataNum>
        <HighlightedCaracter>+</HighlightedCaracter>
      </NumContainer>
      <DataName>{title}</DataName>
    </NumDataContainer>
  );
};

export default NumData;
