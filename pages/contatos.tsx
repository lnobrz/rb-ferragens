import Head from "next/head";
import ContactSection from "@/components/ContactSection";
import Layout from "@/components/ui/Layout";

const Contacts = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Entre em contato com a RB Ferragens através de e-mail, telefone e whatsapp"
        />
        <title>Fale Conosco | RB Ferragens</title>
      </Head>
      <Layout>
        <ContactSection />
      </Layout>
    </>
  );
};

export default Contacts;
