import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/Hero";
import HeroText from "../components/HeroText";
import ImageGrid from "../components/ImageGrid";
import Cta from "../components/Cta";
import TextColumns from "../components/TextColumns";

export default function technology({
  data: { datoCmsPageTechnology: pageData },
}) {
  return (
    <Layout>
      <Hero {...pageData.hero} className="mb-20" />
      <div className="container">
        <HeroText
          {...pageData.technologyIntroHero}
          xlSize={true}
          className="mb-g flex flex-col items-center text-center"
        />
        <Cta {...pageData.ctaOne} />
        <Cta {...pageData.ctaTwo} />
        <ImageGrid {...pageData.imageGrid} className="mb-g" />
        <Hero {...pageData.featureHero} className="mb-d" />
        <TextColumns {...pageData.textGridOne} className="mb-20" />
        <Cta {...pageData.ctaThree} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query TechnologyQuery {
    datoCmsPageTechnology {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      hero {
        ...heroImageFields
      }
      technologyIntroHero {
        ...heroTextFields
      }
      ctaOne {
        ...ctaFields
      }
      ctaTwo {
        ...ctaFields
      }
      ctaThree {
        ...ctaFields
      }
      imageGrid {
        ...imageGridFields
      }
      featureHero {
        ...heroImageFields
      }
      textGridOne {
        ...textColumnsFields
      }
    }
  }
`;
