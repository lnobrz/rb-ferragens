import { services } from "@/storage/data";
import SectionPage from "../SectionPage";

const ServicesSection = () => {
  return (
    <SectionPage pageTitle="serviços" pageContent={services}></SectionPage>
  );
};

export default ServicesSection;
