import Head from "next/head";
import { metaDescriptions, metaTitles } from "@/storage/data";
import ContactSection from "@/components/ContactSection";

const Contacts = () => {
  return (
    <>
      <Head>
        <meta name="description" content={metaDescriptions.contact} />
        <title>{metaTitles.contact}</title>
      </Head>
      <ContactSection />
    </>
  );
};

export default Contacts;
