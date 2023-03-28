import Head from "next/head";
import { metaDescriptions, metaTitles } from "@/storage/data";
import Layout from "@/components/ui/Layout";
import Header from "@/components/ui/Header";
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <Layout>
      <Head>
        <meta name="description" content={metaDescriptions.services} />
        <title>{metaTitles.services}</title>
      </Head>
      <Header />
      <ServicesSection />
    </Layout>
  );
};

export default Services;
