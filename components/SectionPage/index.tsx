import { SectionContainer, CardsContainer } from "./styles";
import OptionCard from "../ui/OptionCard";
import SecondaryTitle from "../ui/SecondaryTitle";
import useDeviceInfo from "@/hooks/useDeviceInfo";
import { props } from "./types";
import { mobileVariants, desktopVariants } from "./animationVariants";

const SectionPage = ({ pageTitle, pageContent }: props) => {
  const device = useDeviceInfo();

  return (
    <SectionContainer>
      <SecondaryTitle
        decorationAlign="left"
        content={pageTitle}
        className="sectionTitle"
      />
      <CardsContainer
        variants={device === "mobile" ? mobileVariants : desktopVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {pageContent.map((content) => {
          return (
            <OptionCard
              key={content.id}
              title={content.name}
              description={content.shortDescription}
              imageUrl={content.imageUrl}
              optionLink={content.optionLink}
            />
          );
        })}
      </CardsContainer>
    </SectionContainer>
  );
};

export default SectionPage;
