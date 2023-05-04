import IndexSection from "../ui/IndexSection";
import {
  paragraphs,
  products,
  advantages,
  advertisements,
} from "@/storage/data";
import BudgetSection from "../ui/BudgetSection";

const IndexSections = () => {
  return (
    <>
      <IndexSection
        titleDecorationAlign="right"
        sectionTitle="produtos"
        sectionParagraph={paragraphs.indexProductSession}
        sectionArr={products}
        hasLinks={true}
        illustrationUrl="/images/products-illustration.png"
        illustrationDescription="ferragens"
      />
      <IndexSection
        titleDecorationAlign="left"
        sectionTitle="vantagens"
        sectionParagraph={paragraphs.indexAdvantagesSection}
        sectionArr={advantages}
        advertisementContent={advertisements.index}
        hasLinks={false}
        illustrationUrl="/images/advantages-illustration.png"
        illustrationDescription="tubos de ferro"
      />
      <BudgetSection />
    </>
  );
};

export default IndexSections;
