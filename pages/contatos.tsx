import Head from "next/head";
import { metaDescriptions } from "@/storage/data";
import Header from "@/components/ui/Header";
import SecondaryTitle from "@/components/ui/SecondaryTitle";
import ContactSection from "@/components/ContactSection";

const Contacts = () => {
  return (
    <>
      <Head>
        <meta name="description" content={metaDescriptions.contact} />
        <title>Fale Conosco</title>
      </Head>
      <ContactSection />
    </>
  );
};

export default Contacts;
