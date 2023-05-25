import { useRouter } from "next/router";
import Head from "next/head";
import getPageTitle from "@/helpers/getPageTitle";
import MobileItemDetails from "@/components/MobileItemDetails";
import { products } from "@/storage/data";
import DesktopItemDetails from "@/components/DesktopItemDetails";
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
            <meta
              name="description"
              content="Do vergalhão à malha pop: confira a variedade de produtos que encontram-se disponíveis na RB Ferragens"
            />
            <title>{pageTitle}</title>
          </Head>
          <Layout>
            {device === "mobile" ? (
              <MobileItemDetails
                sectionName="products"
                itemName={productDetails.name}
                itemImage={productDetails.imageUrl}
                itemDescription={productDetails.description}
                itemRecomendations={productDetails.description}
                haveCorteEDobra={productDetails.measurements ? true : false}
                measurements={productDetails.measurements}
                measurements2={productDetails.measurements2}
              />
            ) : (
              <DesktopItemDetails
                sectionName="products"
                itemName={productDetails.name}
                itemImage={productDetails.imageUrl}
                itemDescription={productDetails.description}
                itemRecomendations={productDetails.description}
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
