import Head from "next/head";
import Cover from "@/components/Cover";
import { metaDescriptions } from "@/storage/data";
import { metaTitles } from "@/storage/data";
import CompanyMetrics from "@/components/CompanyMetrics";
import IndexSection from "@/components/ui/IndexSection";
import { paragraphs } from "@/storage/data";
import { products } from "@/storage/data";

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
    </>
  );
};

export default Home;
