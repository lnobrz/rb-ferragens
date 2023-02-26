import Head from "next/head";
import Cover from "@/components/Cover";
import CompanyMetrics from "@/components/CompanyMetrics";

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A RB Ferragens, localizada em Fortaleza - CE, é especialista na venda, corte e dobra de ferragens voltadas para a área da construção civil."
        />
        <title>Loja de Ferragens | Ferro | Aço - RB Ferragens</title>
      </Head>
      <Cover />
      <CompanyMetrics />
    </>
  );
};

export default Home;
