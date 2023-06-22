import { useRouter } from "next/router";
import Head from "next/head";
import getPageTitle from "@/utils/getPageTitle";
import DesktopItemDetails from "@/components/DesktopItemDetails";
import MobileItemDetails from "@/components/MobileItemDetails";
import { services } from "@/storage/data";
import useDeviceInfo from "@/utils/useDeviceInfo";
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
            <meta
              name="description"
              content="Corte e dobra de ferro e aço é na RB Ferragens"
            />
            <title>{pageTitle}</title>
          </Head>
          <Layout>
            {device === "mobile" ? (
              <MobileItemDetails
                sectionName="services"
                itemName={serviceDetails.name}
                itemImage={serviceDetails.imageUrl}
                itemDescription={serviceDetails.fullDescription}
              />
            ) : (
              <DesktopItemDetails
                sectionName="services"
                itemName={serviceDetails.name}
                itemImage={serviceDetails.imageUrl}
                itemDescription={serviceDetails.fullDescription}
              />
            )}
          </Layout>
        </>
      )}
    </>
  );
};

export default Service;
