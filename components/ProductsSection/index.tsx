import { products } from "@/storage/data";
import SectionPage from "../SectionPage";

const ProductsSection = () => {
  return <SectionPage pageTitle="produtos" pageContent={products} />;
};

export default ProductsSection;
