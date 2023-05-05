import { useRouter } from "next/router";
import Head from "next/head";
import { metaDescriptions } from "@/storage/data";
import Header from "@/components/ui/Header";
import getPageTitle from "@/helpers/getPageTitle";
import MobileProductDetails from "@/components/MobileProductDetails";
import { products } from "@/storage/data";
import DesktopProductDetails from "@/components/DesktopProductDetails";
import useDeviceInfo from "@/helpers/useDeviceInfo";
import Layout from "@/components/ui/Layout";

const Product = () => {
  const router = useRouter();
  const device = useDeviceInfo();
  const productName = router.query.productName?.toString().replace("-", " ");
  const pageTitle = getPageTitle(productName);
  const productDetails = products.filter((product) => {
    return product.name === productName;
  })[0];

  return (
    <>
      {productDetails && (
        <>
          <Head>
            <meta name="description" content={metaDescriptions.products} />
            <title>{pageTitle}</title>
          </Head>
          <Layout>
            {device === "mobile" ? (
              <MobileProductDetails
                productName={productDetails.name}
                productImage={productDetails.imageUrl}
                productDescription={productDetails.description}
                productRecomendations={productDetails.description}
                haveCorteEDobra={productDetails.measurements ? true : false}
                measurements={productDetails.measurements}
                measurements2={productDetails.measurements2}
              />
            ) : (
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
        </>
      )}
    </>
  );
};

export default Product;
