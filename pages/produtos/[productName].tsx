import { useRouter } from "next/router";
import Head from "next/head";
import { metaDescriptions } from "@/storage/data";
import Layout from "@/components/ui/Layout";
import Header from "@/components/ui/Header";
import getPageTitle from "@/helpers/getPageTitle";
import ProductDetailsSection from "@/components/ProductDetailsSection";
import { products } from "@/storage/data";

const Product = () => {
  const router = useRouter();
  const productName = router.query.productName?.toString();
  const pageTitle = getPageTitle(
    router.query.productName ? router.query.productName : undefined
  );
  const productDetails = products.filter((product) => {
    return product.name === productName;
  })[0];

  return (
    <>
      {productDetails && (
        <Layout>
          <Head>
            <meta name="description" content={metaDescriptions.products} />
            <title>{pageTitle}</title>
          </Head>
          <Header />
          <ProductDetailsSection
            productName={productDetails.name}
            productDescription={productDetails.description}
            productRecomendations={productDetails.description}
          />
        </Layout>
      )}
    </>
  );
};

export default Product;
