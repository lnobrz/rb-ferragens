import { MetricsContainer } from "./styles";
import NumData from "../ui/NumData";
import { metrics } from "@/storage/data";

const metricsVariants = {
  hidden: {
    scale: 0,
    y: -20,
  },
  visible: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      mass: 0.4,
      stiffness: 70,
      delayChildren: 0.1,
    },
  },
};
const CompanyMetrics = () => {
  return (
    <MetricsContainer
      variants={metricsVariants}
      initial="hidden"
      animate="visible"
    >
      {metrics.map((metric) => {
        return (
          <NumData key={metric.id} title={metric.data} data={metric.amount} />
        );
      })}
    </MetricsContainer>
  );
};

export default CompanyMetrics;
