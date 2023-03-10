import Head from "next/head";
import Cover from "@/components/Cover";
import CompanyMetrics from "@/components/CompanyMetrics";
import { metaDescriptions, metaTitles } from "@/storage/data";
import IndexSections from "@/components/IndexSections";
import Layout from "@/components/ui/Layout";

const Home = () => {
  return (
    <Layout>
      <Head>
        <meta name="description" content={metaDescriptions.index} />
        <title>{metaTitles.index}</title>
      </Head>
      <Cover />
      <CompanyMetrics />
      <IndexSections />
    </Layout>
  );
};

export default Home;
