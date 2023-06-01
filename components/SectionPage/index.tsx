import { SectionContainer, CardsContainer } from "./styles";
import OptionCard from "../ui/OptionCard";
import SecondaryTitle from "../ui/SecondaryTitle";
import useDeviceInfo from "@/helpers/useDeviceInfo";
import { useEffect } from "react";

type SectionPageTypes = {
  pageTitle: string;
  pageContent: {
    id: number;
    name: string;
    shortDescription: string;
    fullDescription: string;
    recomendations: string;
    imageUrl: string;
    optionLink: string;
  }[];
};

const mobileSectionPageVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
      mass: 0.1,
      stiffness: 50,
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const desktopSectionPageVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      mass: 0.1,
      stiffness: 50,
    },
  },
};

const SectionPage = ({ pageTitle, pageContent }: SectionPageTypes) => {
  const device = useDeviceInfo();

  return (
    <SectionContainer>
      <SecondaryTitle
        decorationAlign="left"
        content={pageTitle}
        className="sectionTitle"
      />
      <CardsContainer
        variants={
          device === "mobile"
            ? mobileSectionPageVariants
            : desktopSectionPageVariants
        }
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
