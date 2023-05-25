import Head from "next/head";
import ProductsSection from "@/components/ProductsSection";
import Layout from "@/components/ui/Layout";

const Products = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Do vergalhão à malha pop: confira a variedade de produtos que encontram-se disponíveis na RB Ferragens"
        />
        <title>Produtos | RB Ferragens</title>
      </Head>
      <Layout>
        <ProductsSection />
      </Layout>
    </>
  );
};

export default Products;
