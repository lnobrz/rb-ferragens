import { MetricsContainer } from "./styles";
import NumData from "../ui/NumData";
import { metrics } from "@/storage/data";
const CompanyMetrics = () => {
  return (
    <MetricsContainer>
      {metrics.map((metric) => {
        return (
          <NumData key={metric.id} title={metric.data} data={metric.amount} />
        );
      })}
    </MetricsContainer>
  );
};

export default CompanyMetrics;
