import SecondaryTitle from "../ui/SecondaryTitle";
import Paragraph from "../ui/Paragraph";
import TertiaryTitle from "../ui/TertiaryTitle";
import CompanyMetrics from "../CompanyMetrics";
import FilledButton from "../ui/FilledButton";
import { buttonsLinks } from "@/storage/data";
import {
  AboutSectionContainer,
  ContentContainer,
  MetricsContainer,
} from "./styles";
import { topics, aboutStrings } from "@/storage/data";

const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <SecondaryTitle
        decorationAlign="left"
        content="Sobre Nós"
        className="aboutPageTitle"
      />
      <ContentContainer>
        {aboutStrings.map((aboutText) => {
          return (
            <Paragraph
              key={aboutText}
              content={aboutText}
              textrole="secondary"
              className="introParagraph"
            />
          );
        })}
      </ContentContainer>
      {topics.map((topic) => {
        return (
          <ContentContainer key={topic.id}>
            <TertiaryTitle decorationAlign="left" content={topic.name} />
            <Paragraph content={topic.content} textrole="secondary" />
          </ContentContainer>
        );
      })}
      <ContentContainer>
        <TertiaryTitle decorationAlign="left" content="RB Em Números" />
        <MetricsContainer>
          <CompanyMetrics className="aboutMetrics" />
          <FilledButton
            content="Compre Conosco"
            background="yellow"
            size="small"
            url={buttonsLinks.budget}
            className="contentButton"
          />
        </MetricsContainer>
      </ContentContainer>
    </AboutSectionContainer>
  );
};

export default AboutSection;
