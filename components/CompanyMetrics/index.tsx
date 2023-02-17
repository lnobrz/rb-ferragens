import { MetricsContainer } from "./styles";
import NumData from "../ui/NumData";
import { companyMetrics } from "@/storage/strings";
const CompanyMetrics = () => {
  return (
    <MetricsContainer>
      {companyMetrics.map((metric) => {
        return (
          <NumData key={metric.id} title={metric.data} data={metric.amount} />
        );
      })}
    </MetricsContainer>
  );
};

export default CompanyMetrics;
