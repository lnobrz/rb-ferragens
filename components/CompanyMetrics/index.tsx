import { MetricsContainer } from "./styles";
import NumData from "../ui/NumData";
import { metrics } from "@/storage/data";

const metricsVariants = {
  hidden: {
    opacity: 0,
    y: "-5vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      when: "beforeChildren",
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
