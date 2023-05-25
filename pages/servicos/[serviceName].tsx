import { useRouter } from "next/router";
import Head from "next/head";
import { metaDescriptions } from "@/storage/data";
import getPageTitle from "@/helpers/getPageTitle";
import MobileProductDetails from "@/components/MobileItemDetails";
import { services } from "@/storage/data";
import DesktopProductDetails from "@/components/DesktopItemDetails";
import useDeviceInfo from "@/helpers/useDeviceInfo";
import Layout from "@/components/ui/Layout";

const Service = () => {
  const router = useRouter();
  const device = useDeviceInfo();
  const serviceName = router.query.serviceName?.toString().replaceAll("-", " ");
  const pageTitle = getPageTitle(serviceName);
  const serviceDetails = services.filter((service) => {
    return service.name === serviceName;
  })[0];

  return (
    <>
      {serviceDetails && (
        <>
          <Head>
            <meta name="description" content={metaDescriptions.services} />
            <title>{pageTitle}</title>
          </Head>
          <Layout>
            {device === "mobile" ? (
              <MobileProductDetails
                productName={serviceDetails.name}
                productImage={serviceDetails.imageUrl}
                productDescription={serviceDetails.description}
              />
            ) : (
              <DesktopProductDetails
                productName={serviceDetails.name}
                productImage={serviceDetails.imageUrl}
                productDescription={serviceDetails.description}
              />
            )}
          </Layout>
        </>
      )}
    </>
  );
};

export default Service;
