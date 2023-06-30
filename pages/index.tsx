import Head from "next/head";
import Cover from "@/components/Cover";
import CompanyMetrics from "@/components/CompanyMetrics";
import IndexSections from "@/components/IndexSections";
import Layout from "@/components/ui/Layout";
import useDeviceInfo from "@/hooks/useDeviceInfo";

const Home = () => {
  const device = useDeviceInfo();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="A RB Ferragens, localizada em Fortaleza - CE, é especialista na venda, corte e dobra de ferragens voltadas para a área da construção civil."
        />
        <title>Loja de Ferragens | Ferro | Aço - RB Ferragens</title>
      </Head>
      <Cover device={device} />
      <Layout>
        <CompanyMetrics />
        <IndexSections />
      </Layout>
    </>
  );
};

export default Home;
