import Head from "next/head";
import ServicesSection from "@/components/ServicesSection";
import Layout from "@/components/ui/Layout";

const Services = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Corte e dobra de ferro e aço é na RB Ferragens"
        />
        <title>Serviços | RB Ferragens</title>
      </Head>
      <Layout>
        <ServicesSection />
      </Layout>
    </>
  );
};

export default Services;
