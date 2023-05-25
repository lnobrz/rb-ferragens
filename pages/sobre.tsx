import Head from "next/head";
import AboutSection from "@/components/AboutSection";
import Layout from "@/components/ui/Layout";

const About = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Entenda nossa origem, missão, visão e valores"
        />
        <title>Sobre | RB Ferragens</title>
      </Head>
      <Layout>
        <AboutSection />
      </Layout>
    </>
  );
};

export default About;
