import { MetricsContainer } from "./styles";
import NumData from "../ui/NumData";
import { metrics } from "@/storage/data";
import { metricsVariants } from "./animationVariants";
import { props } from "./types";

const CompanyMetrics = ({ className = "" }: props) => {
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
