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
    setTimeout(() => {
      const controls = animate(count, data);

      return controls.stop;
    }, 250);
  }, [count, data]);

  return (
    <NumDataContainer>
      <NumContainer>
        <DataNum>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {rounded}
          </motion.div>
        </DataNum>
        <HighlightedCaracter>+</HighlightedCaracter>
      </NumContainer>
      <DataName>{title}</DataName>
    </NumDataContainer>
  );
};

export default NumData;
