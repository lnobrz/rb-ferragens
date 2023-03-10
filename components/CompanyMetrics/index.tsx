import { MetricsContainer } from "./styles";
import NumData from "../ui/NumData";
import { metrics } from "@/storage/data";

const metricsVariants = {
  hidden: {
    scale: 0,
    y: -20,
  },
  show: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      mass: 0.4,
      stiffness: 70,
      delay: 1.5,
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};
const CompanyMetrics = () => {
  return (
    <MetricsContainer
      variants={metricsVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
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
