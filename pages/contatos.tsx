import Head from "next/head";
import { metaDescriptions, metaTitles } from "@/storage/data";
import ContactSection from "@/components/ContactSection";
import Layout from "@/components/ui/Layout";

const Contacts = () => {
  return (
    <>
      <Head>
        <meta name="description" content={metaDescriptions.contact} />
        <title>{metaTitles.contact}</title>
      </Head>
      <Layout>
        <ContactSection />
      </Layout>
    </>
  );
};

export default Contacts;
