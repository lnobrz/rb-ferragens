import Head from "next/head";
import { metaDescriptions, metaTitles } from "@/storage/data";
import Layout from "@/components/ui/Layout";
import Header from "@/components/ui/Header";
import ProductsSection from "@/components/ProductsSection";

const Products = () => {
  return (
    <Layout>
      <Head>
        <meta name="description" content={metaDescriptions.products} />
        <title>{metaTitles.products}</title>
      </Head>
      <Header />
      <ProductsSection />
    </Layout>
  );
};

export default Products;
