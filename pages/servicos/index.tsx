import Head from "next/head";
import { metaDescriptions, metaTitles } from "@/storage/data";
import Header from "@/components/ui/Header";
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <>
      <Head>
        <meta name="description" content={metaDescriptions.services} />
        <title>{metaTitles.services}</title>
      </Head>
      <ServicesSection />
    </>
  );
};

export default Services;
