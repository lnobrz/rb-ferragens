import Head from "next/head";
import Cover from "@/components/Cover";
import { metaDescriptions } from "@/storage/strings";
import CompanyMetrics from "@/components/CompanyMetrics";

const Home = () => {
  return (
    <>
      <Head>
        <meta name="description" content={metaDescriptions.index} />
        <title>Loja de Ferragens | Ferro | Aço - RB Ferragens</title>
      </Head>
      <Cover />
      <CompanyMetrics />
    </>
  );
};

export default Home;
