import { SectionContainer, CardsContainer } from "./styles";
import OptionCard from "../ui/OptionCard";
import { products } from "@/storage/data";
import SecondaryTitle from "../ui/SecondaryTitle";
import useDeviceInfo from "@/hooks/useDeviceInfo";

const mobileProductsSectionVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
      mass: 0.1,
      stiffness: 50,
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const desktopProductsSectionVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      mass: 0.1,
      stiffness: 50,
    },
  },
};

const ProductsSection = () => {
  const device = useDeviceInfo();

  return (
    <SectionContainer>
      <SecondaryTitle
        decorationAlign="left"
        content="Produtos"
        className="productsSectionTitle"
      />
      <CardsContainer
        variants={
          device === "mobile"
            ? mobileProductsSectionVariants
            : desktopProductsSectionVariants
        }
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {products.map((product) => {
          return (
            <OptionCard
              key={product.id}
              title={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          );
        })}
      </CardsContainer>
    </SectionContainer>
  );
};

export default ProductsSection;
