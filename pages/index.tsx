import Head from "next/head";
import Cover from "@/components/Cover";
import CompanyMetrics from "@/components/CompanyMetrics";

const Home = () => {
  return (
    <>
      <Head>
        <title>RB Ferragens | Loja de Ferragens - Venda de Ferro e Aço</title>
      </Head>
      <Cover />
      <CompanyMetrics />
    </>
  );
};

export default Home;
