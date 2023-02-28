import IndexSection from "../ui/IndexSection";
import IndexAboutSection from "../ui/IndexAboutSection";
import {
  paragraphs,
  products,
  advantages,
  advertisements,
} from "@/storage/data";

const IndexSections = () => {
  return (
    <>
      <IndexSection
        titleDecorationAlign="right"
        sectionTitle="produtos"
        sectionParagraph={paragraphs.indexProductSession}
        sectionArr={products}
      />
      <IndexSection
        titleDecorationAlign="left"
        sectionTitle="vantagens"
        sectionParagraph={paragraphs.indexAdvantagesSection}
        sectionArr={advantages}
        advertisementContent={advertisements.index}
      />
      <IndexAboutSection />
    </>
  );
};

export default IndexSections;
