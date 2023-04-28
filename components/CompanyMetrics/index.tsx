import { MetricsContainer } from "./styles";
import NumData from "../ui/NumData";
import { metrics } from "@/storage/data";

type CompanyMetricsTypes = {
  className?: string;
};

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
      staggerChildren: 0.1,
    },
  },
};
const CompanyMetrics = ({ className = "" }: CompanyMetricsTypes) => {
  return (
    <MetricsContainer
      variants={metricsVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
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
