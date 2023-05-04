import Head from "next/head";
import AboutSection from "@/components/AboutSection";
import { metaTitles, metaDescriptions } from "@/storage/data";

const About = () => {
  return (
    <>
      <Head>
        <meta name="description" content={metaDescriptions.about} />
        <title>{metaTitles.about}</title>
      </Head>
      <AboutSection />
    </>
  );
};

export default About;
