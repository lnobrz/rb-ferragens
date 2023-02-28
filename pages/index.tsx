import Head from "next/head";
import Cover from "@/components/Cover";
import CompanyMetrics from "@/components/CompanyMetrics";
import { metaDescriptions, metaTitles } from "@/storage/data";
import IndexSections from "@/components/IndexSections";

const Home = () => {
  return (
    <>
      <Head>
        <meta name="description" content={metaDescriptions.index} />
        <title>{metaTitles.index}</title>
      </Head>
      <Cover />
      <CompanyMetrics />
      <IndexSections />
    </>
  );
};

export default Home;
