import Head from "next/head";
import { metaDescriptions, metaTitles } from "@/storage/data";
import Header from "@/components/ui/Header";
import ServicesSection from "@/components/ServicesSection";
import Layout from "@/components/ui/Layout";

const Services = () => {
  return (
    <>
      <Head>
        <meta name="description" content={metaDescriptions.services} />
        <title>{metaTitles.services}</title>
      </Head>
      <Layout>
        <ServicesSection />
      </Layout>
    </>
  );
};

export default Services;
