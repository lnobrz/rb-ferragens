import Head from "next/head";
import AboutSection from "@/components/AboutSection";
import { metaTitles, metaDescriptions } from "@/storage/data";
import Layout from "@/components/ui/Layout";

const About = () => {
  return (
    <>
      <Head>
        <meta name="description" content={metaDescriptions.about} />
        <title>{metaTitles.about}</title>
      </Head>
      <Layout>
        <AboutSection />
      </Layout>
    </>
  );
};

export default About;
