import React from "react";
import Img from "gatsby-image";

import Layout from "../components/layout";
import Hero from "../components/Hero";
import ImageGrid from "../components/ImageGrid";
import Cta from "../components/Cta";
import TextColumns from "../components/TextColumns";
import HeroText from "../components/HeroText";

export default ({
  data: { datoCmsPageCareer: pageData, allDatoCmsEmployeeQuote: quotes },
}) => {
  console.log(quotes);
  return (
    <Layout>
      <Hero {...pageData.hero} className="mb-20" />
      <div className="container">
        <HeroText {...pageData.featureOne} className="text-center py-g" />
        <Cta {...pageData.ctaOne} className="pb-g" />
        <section className="mb-g">
          <h1 className="text-center h1">{pageData.positionsSectionTitle}</h1>
          <p>Loop through workable items</p>
        </section>
      </div>
      <Hero {...pageData.featureHero} className="mb-20" />
      <div className="container">
        <Cta {...pageData.featureImageGrid} />
        <section>
          <h1 className="text-center h1 my-g">
            {pageData.customerTestimonialTitle}
          </h1>
          {/* like the news article styling */}
          {!!quotes.nodes.length && (
            <ul>
              {quotes.nodes.map((quote) => (
                <li key={quote.name}>{quote.name}</li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query CareersQuery {
    datoCmsPageCareer {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      hero {
        ...heroImageFields
      }
      featureHero {
        ...heroImageFields
      }
      featureOne {
        ...heroTextFields
      }
      ctaOne {
        ...ctaFields
      }
      featureImageGrid {
        ...featureImageGridFields
      }
      customerTestimonialTitle
      positionsSectionTitle
    }
    allDatoCmsEmployeeQuote {
      nodes {
        title
        name
        quoteNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
