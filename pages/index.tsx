import Head from "next/head";
import Cover from "@/components/Cover";
import CompanyMetrics from "@/components/CompanyMetrics";
import IndexSection from "@/components/ui/IndexSection";
import {
  metaDescriptions,
  metaTitles,
  paragraphs,
  products,
  advantages,
  advertisements,
} from "@/storage/data";

const Home = () => {
  return (
    <>
      <Head>
        <meta name="description" content={metaDescriptions.index} />
        <title>{metaTitles.index}</title>
      </Head>
      <Cover />
      <CompanyMetrics />
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
    </>
  );
};

export default Home;
