import Head from "next/head";
import { metaDescriptions, metaTitles } from "@/storage/data";
import Header from "@/components/ui/Header";
import ProductsSection from "@/components/ProductsSection";

const Products = () => {
  return (
    <>
      <Head>
        <meta name="description" content={metaDescriptions.products} />
        <title>{metaTitles.products}</title>
      </Head>
      <Header />
      <ProductsSection />
    </>
  );
};

export default Products;
