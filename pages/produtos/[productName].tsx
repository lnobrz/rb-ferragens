import { useRouter } from "next/router";
import Head from "next/head";
import { metaDescriptions } from "@/storage/data";
import Layout from "@/components/ui/Layout";
import Header from "@/components/ui/Header";
import getPageTitle from "@/helpers/getPageTitle";
import MobileProductDetails from "@/components/MobileProductDetails";
import { products } from "@/storage/data";
import DesktopProductDetails from "@/components/DesktopProductDetails";
import useDeviceInfo from "@/helpers/useDeviceInfo";

const Product = () => {
  const router = useRouter();
  const device = useDeviceInfo();
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
          {device === "mobile" ?
            (<MobileProductDetails
              productName={productDetails.name}
              productImage={productDetails.imageUrl}
              productDescription={productDetails.description}
              productRecomendations={productDetails.description}
              haveCorteEDobra={productDetails.measurements ? true : false}
              measurements={productDetails.measurements}
              measurements2={productDetails.measurements2} />) : (
              <DesktopProductDetails
                productName={productDetails.name}
                productImage={productDetails.imageUrl}
                productDescription={productDetails.description}
                productRecomendations={productDetails.description}
                haveCorteEDobra={productDetails.measurements ? true : false}
                measurements={productDetails.measurements}
                measurements2={productDetails.measurements2}
              />
            )}

        </Layout>
      )}
    </>
  );
};

export default Product;
